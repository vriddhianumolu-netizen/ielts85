package com.pari.ielts85;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;

import java.util.Calendar;

/** Schedules the daily "do all four modules" notification. */
public final class Reminders {
    private static final String PREFS = "reminder";

    private Reminders() { }

    private static PendingIntent pi(Context c) {
        Intent i = new Intent(c, ReminderReceiver.class);
        return PendingIntent.getBroadcast(c, 7, i, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
    }

    public static void schedule(Context c, int hour, int minute) {
        c.getSharedPreferences(PREFS, Context.MODE_PRIVATE).edit()
                .putBoolean("on", true).putInt("h", hour).putInt("m", minute).apply();
        Calendar t = Calendar.getInstance();
        t.set(Calendar.HOUR_OF_DAY, hour);
        t.set(Calendar.MINUTE, minute);
        t.set(Calendar.SECOND, 0);
        t.set(Calendar.MILLISECOND, 0);
        if (t.getTimeInMillis() <= System.currentTimeMillis()) t.add(Calendar.DAY_OF_YEAR, 1);
        AlarmManager am = (AlarmManager) c.getSystemService(Context.ALARM_SERVICE);
        am.cancel(pi(c));
        am.setInexactRepeating(AlarmManager.RTC_WAKEUP, t.getTimeInMillis(), AlarmManager.INTERVAL_DAY, pi(c));
    }

    public static void cancel(Context c) {
        c.getSharedPreferences(PREFS, Context.MODE_PRIVATE).edit().putBoolean("on", false).apply();
        ((AlarmManager) c.getSystemService(Context.ALARM_SERVICE)).cancel(pi(c));
    }

    public static void restore(Context c) {
        SharedPreferences p = c.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        if (p.getBoolean("on", false)) schedule(c, p.getInt("h", 19), p.getInt("m", 0));
    }
}
