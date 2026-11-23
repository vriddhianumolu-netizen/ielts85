package com.pari.ielts85;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;

/** Shows the daily study reminder; also re-schedules it after the phone restarts. */
public class ReminderReceiver extends BroadcastReceiver {
    private static final String CH = "daily";
    private static final String[] LINES = {
            "Listen, Read, Write, Speak: finish all four today to keep your streak!",
            "Band 8.5 is built one day at a time. Your four modules are waiting.",
            "15 minutes per module. You can do this today!",
            "Don't break the streak! Open IELTS 8.5 and do today's practice."
    };

    @Override
    public void onReceive(Context c, Intent intent) {
        if (Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())) { Reminders.restore(c); return; }
        NotificationManager nm = (NotificationManager) c.getSystemService(Context.NOTIFICATION_SERVICE);
        if (Build.VERSION.SDK_INT >= 26) {
            nm.createNotificationChannel(new NotificationChannel(CH, "Daily practice reminder", NotificationManager.IMPORTANCE_DEFAULT));
        }
        PendingIntent open = PendingIntent.getActivity(c, 0, new Intent(c, MainActivity.class),
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        String text = LINES[(int) ((System.currentTimeMillis() / 86400000L) % LINES.length)];
        Notification.Builder b = Build.VERSION.SDK_INT >= 26 ? new Notification.Builder(c, CH) : new Notification.Builder(c);
        b.setSmallIcon(R.drawable.ic_notif)
                .setContentTitle("IELTS 8.5: practice time")
                .setContentText(text)
                .setStyle(new Notification.BigTextStyle().bigText(text))
                .setContentIntent(open)
                .setAutoCancel(true);
        try { nm.notify(1, b.build()); } catch (SecurityException ignored) { }
    }
}
