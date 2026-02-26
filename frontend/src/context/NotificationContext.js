"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { X, Bell, CheckCircle2, AlertCircle, Info } from "lucide-react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    const [notifications, setNotifications] = useState([
        {
            id: "1",
            title: "Welcome to Kaika AI",
            message: "Take your first step towards finding peace of mind.",
            time: "Just now",
            read: false,
            type: "info",
        },
        {
            id: "2",
            title: "Daily Goal Met",
            message: "You have completed your daily reflection. Great job!",
            time: "2 hours ago",
            read: false,
            type: "success",
        },
    ]);

    // Toast Functionality
    const addToast = useCallback((message, type = "info", duration = 4000) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);

        if (duration) {
            setTimeout(() => {
                removeToast(id);
            }, duration);
        }
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    // Notifications bell functionality
    const unreadCount = notifications.filter((n) => !n.read).length;

    const markAllAsRead = () => {
        setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    };

    const markAsRead = (id) => {
        setNotifications((prev) =>
            prev.map((n) => (n.id === id ? { ...n, read: true } : n))
        );
    };

    const addNotification = (notif) => {
        const newNotif = {
            id: Math.random().toString(36).substring(2, 9),
            time: "Just now",
            read: false,
            ...notif,
        };
        setNotifications((prev) => [newNotif, ...prev]);
    };

    return (
        <NotificationContext.Provider
            value={{
                toasts,
                addToast,
                removeToast,
                notifications,
                unreadCount,
                markAllAsRead,
                markAsRead,
                addNotification,
            }}
        >
            {children}

            {/* Toast Container */}
            <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`
              pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg 
              transform transition-all duration-300 animate-in slide-in-from-right-8 fade-in
              ${toast.type === "success"
                                ? "bg-background border border-green-200 text-foreground"
                                : toast.type === "error"
                                    ? "bg-red-50 border border-red-200 text-red-800"
                                    : "bg-surface border border-border text-foreground"
                            }
            `}
                    >
                        {toast.type === "success" && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                        {toast.type === "error" && <AlertCircle className="w-5 h-5 text-red-500" />}
                        {toast.type === "info" && <Info className="w-5 h-5 text-primary" />}

                        <p className="font-medium text-sm pr-6 leading-tight">{toast.message}</p>

                        <button
                            onClick={() => removeToast(toast.id)}
                            className="absolute right-2 top-2 p-1 rounded-md hover:bg-black/5 transition-colors"
                        >
                            <X className="w-4 h-4 opacity-50 hover:opacity-100" />
                        </button>
                    </div>
                ))}
            </div>
        </NotificationContext.Provider>
    );
}

export function useNotification() {
    return useContext(NotificationContext);
}
