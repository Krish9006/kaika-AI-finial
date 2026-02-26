"use client";

import { useNotification } from "@/context/NotificationContext";
import { Bell, CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function NotificationBell() {
    const [isOpen, setIsOpen] = useState(false);
    const { notifications, unreadCount, markAllAsRead, markAsRead } = useNotification();
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={handleToggle}
                className="relative p-2 text-background/60 hover:text-background transition-colors hover:bg-surface/10 rounded-full"
            >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full border border-foreground"></span>
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-surface border border-border rounded-2xl shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center justify-between px-4 py-3 bg-background border-b border-border">
                        <h3 className="font-serif font-semibold text-foreground">Notifications</h3>
                        {unreadCount > 0 && (
                            <button
                                onClick={markAllAsRead}
                                className="text-xs text-primary hover:text-foreground font-medium transition-colors"
                            >
                                Mark all read
                            </button>
                        )}
                    </div>

                    <div className="max-h-[320px] overflow-y-auto">
                        {notifications.length === 0 ? (
                            <div className="px-4 py-8 text-center text-foreground/50 text-sm">
                                No notifications yet.
                            </div>
                        ) : (
                            <ul className="divide-y divide-border">
                                {notifications.map((notif) => (
                                    <li
                                        key={notif.id}
                                        className={`px-4 py-3 hover:bg-surface-alt transition-colors flex items-start gap-3 cursor-pointer ${!notif.read ? "bg-surface" : "bg-surface opacity-60"
                                            }`}
                                        onClick={() => markAsRead(notif.id)}
                                    >
                                        <div className="mt-0.5">
                                            {notif.type === "success" && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                                            {notif.type === "info" && <Info className="w-4 h-4 text-primary" />}
                                            {notif.type === "warning" && <AlertCircle className="w-4 h-4 text-orange-500" />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className={`text-sm ${!notif.read ? "font-semibold text-foreground" : "text-foreground"} truncate`}>
                                                {notif.title}
                                            </p>
                                            <p className="text-xs text-foreground/60 mt-0.5 line-clamp-2 leading-relaxed">
                                                {notif.message}
                                            </p>
                                            <p className="text-[10px] text-foreground/40 mt-1.5 font-medium uppercase tracking-wider">
                                                {notif.time}
                                            </p>
                                        </div>
                                        {!notif.read && (
                                            <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-1.5" />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="p-2 bg-surface-alt border-t border-border text-center">
                        <button className="text-xs font-semibold uppercase tracking-widest text-primary hover:text-foreground transition-colors py-1">
                            View All
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
