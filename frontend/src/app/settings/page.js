"use client";

import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNotification } from "@/context/NotificationContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft, Camera, Bell, User as UserIcon, Shield,
    Globe, Moon, Mail, Smartphone, Save
} from "lucide-react";
import ThemeToggle from "@/components/dashboard/ThemeToggle";

export default function SettingsPage() {
    const { user, loading } = useAuth();
    const { addToast } = useNotification();
    const router = useRouter();
    const fileInputRef = useRef(null);

    // Profile state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [timezone, setTimezone] = useState("America/New_York");
    const [avatar, setAvatar] = useState("/logo.jpeg");

    // Notifications state
    const [notifications, setNotifications] = useState({
        emailDaily: true,
        emailWeekly: false,
        pushReflections: true,
        pushGoals: true,
        marketing: false
    });

    const [activeTab, setActiveTab] = useState("profile");

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        } else if (user) {
            setName(user.name || "");
            setEmail(user.email || "");
        }
    }, [user, loading, router]);

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            // In a real app we would upload this file to a server/CDN
            // For now we just create a local URL for preview
            const url = URL.createObjectURL(file);
            setAvatar(url);
            addToast("Profile picture updated successfully!", "success");
        }
    };

    const handleSaveProfile = (e) => {
        e.preventDefault();
        // Here we'd call the API to update the user
        addToast("Profile information saved successfully!", "success");
    };

    const handleToggleNotification = (key) => {
        setNotifications(prev => {
            const next = { ...prev, [key]: !prev[key] };
            addToast("Notification preferences updated.", "success");
            return next;
        });
    };

    if (loading || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="animate-spin rounded-full h-10 w-10 border-2 border-t-foreground border-r-foreground border-b-transparent border-l-transparent"></div>
            </div>
        );
    }

    const tabs = [
        { id: "profile", label: "Profile", icon: <UserIcon className="w-4 h-4" /> },
        { id: "notifications", label: "Notifications", icon: <Bell className="w-4 h-4" /> },
        { id: "appearance", label: "Appearance", icon: <Moon className="w-4 h-4" /> },
        { id: "security", label: "Security", icon: <Shield className="w-4 h-4" /> },
    ];

    const timezones = [
        "America/Los_Angeles",
        "America/Denver",
        "America/Chicago",
        "America/New_York",
        "Europe/London",
        "Europe/Paris",
        "Asia/Tokyo",
        "Asia/Kolkata",
        "Australia/Sydney"
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="bg-surface border-b border-border sticky top-0 z-40">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard" className="p-2 -ml-2 text-foreground/60 hover:text-foreground hover:bg-background rounded-full transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <h1 className="font-serif font-semibold text-xl">Settings & Profile</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8">
                {/* Sidebar Navigation */}
                <aside className="md:w-64 flex-shrink-0">
                    <nav className="flex flex-col gap-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${activeTab === tab.id
                                    ? "bg-foreground text-background shadow-md"
                                    : "text-foreground/60 hover:bg-surface hover:text-foreground"
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 bg-surface border border-border rounded-2xl p-8 shadow-sm">
                    {activeTab === "profile" && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="mb-8">
                                <h2 className="font-serif text-2xl font-medium mb-1">Public Profile</h2>
                                <p className="text-sm text-foreground/60">Manage how your profile appears across the platform.</p>
                            </div>

                            <form onSubmit={handleSaveProfile} className="space-y-8">
                                {/* Avatar Upload */}
                                <div className="flex items-center gap-6">
                                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-background border-2 border-border group">
                                        <Image src={avatar} alt="Profile" fill className="object-cover" />
                                        <div
                                            className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                            onClick={handleAvatarClick}
                                        >
                                            <Camera className="w-6 h-6 text-background" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <button
                                                type="button"
                                                onClick={handleAvatarClick}
                                                className="px-4 py-2 bg-background hover:bg-border rounded-xl text-sm font-semibold transition-colors border border-border"
                                            >
                                                Change Avatar
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setAvatar("/logo.jpeg")}
                                                className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                        <p className="text-xs text-foreground/50">JPG, GIF or PNG. Max size 2MB.</p>
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                            accept="image/*"
                                            className="hidden"
                                        />
                                    </div>
                                </div>

                                {/* Form Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">Full Name</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">Email Address</label>
                                        <input
                                            type="email"
                                            value={email}
                                            disabled
                                            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground/60 cursor-not-allowed"
                                        />
                                        <p className="text-xs text-foreground/50">Email cannot be changed directly.</p>
                                    </div>
                                </div>

                                <div className="space-y-2 max-w-md">
                                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                                        <Globe className="w-4 h-4 text-foreground/50" />
                                        Timezone
                                    </label>
                                    <select
                                        value={timezone}
                                        onChange={(e) => setTimezone(e.target.value)}
                                        className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all appearance-none"
                                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232D1B2D' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
                                    >
                                        {timezones.map(tz => (
                                            <option key={tz} value={tz}>{tz.replace("_", " ")}</option>
                                        ))}
                                    </select>
                                    <p className="text-xs text-foreground/50">Used to send accurate daily reflection reminders.</p>
                                </div>

                                <div className="pt-6 border-t border-border flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-foreground text-background px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-primary transition-colors flex items-center gap-2"
                                    >
                                        <Save className="w-4 h-4" />
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {activeTab === "notifications" && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="mb-8">
                                <h2 className="font-serif text-2xl font-medium mb-1">Notification Preferences</h2>
                                <p className="text-sm text-foreground/60">Choose what updates you want to receive.</p>
                            </div>

                            <div className="space-y-8">
                                {/* Email Notifications */}
                                <div>
                                    <h3 className="text-sm uppercase tracking-widest font-bold text-secondary mb-4 flex items-center gap-2">
                                        <Mail className="w-4 h-4" /> Email
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-border bg-surface-alt">
                                            <div>
                                                <p className="font-medium text-sm">Daily Reflection Reminder</p>
                                                <p className="text-xs text-foreground/60 mt-0.5">A gentle nudge each morning to start your practice.</p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => handleToggleNotification('emailDaily')}
                                                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 ${notifications.emailDaily ? "bg-foreground" : "bg-border"}`}
                                            >
                                                <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-surface shadow ring-0 transition duration-200 ease-in-out ${notifications.emailDaily ? "translate-x-5" : "translate-x-0"}`} />
                                            </button>
                                        </div>
                                        <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-border bg-surface-alt">
                                            <div>
                                                <p className="font-medium text-sm">Weekly Progress Report</p>
                                                <p className="text-xs text-foreground/60 mt-0.5">A summary of your journey and AI insights every Sunday.</p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => handleToggleNotification('emailWeekly')}
                                                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 ${notifications.emailWeekly ? "bg-foreground" : "bg-border"}`}
                                            >
                                                <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-surface shadow ring-0 transition duration-200 ease-in-out ${notifications.emailWeekly ? "translate-x-5" : "translate-x-0"}`} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Push Notifications */}
                                <div className="pt-6 border-t border-border">
                                    <h3 className="text-sm uppercase tracking-widest font-bold text-secondary mb-4 flex items-center gap-2">
                                        <Smartphone className="w-4 h-4" /> Push Notifications
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-border bg-surface-alt">
                                            <div>
                                                <p className="font-medium text-sm">Reflection Completion</p>
                                                <p className="text-xs text-foreground/60 mt-0.5">Get notified when you successfully maintain your streak.</p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => handleToggleNotification('pushReflections')}
                                                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 ${notifications.pushReflections ? "bg-foreground" : "bg-border"}`}
                                            >
                                                <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-surface shadow ring-0 transition duration-200 ease-in-out ${notifications.pushReflections ? "translate-x-5" : "translate-x-0"}`} />
                                            </button>
                                        </div>
                                        <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-border bg-surface-alt">
                                            <div>
                                                <p className="font-medium text-sm">Goal Reminders</p>
                                                <p className="text-xs text-foreground/60 mt-0.5">Stay on top of your daily goals and intentions.</p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => handleToggleNotification('pushGoals')}
                                                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 ${notifications.pushGoals ? "bg-foreground" : "bg-border"}`}
                                            >
                                                <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-surface shadow ring-0 transition duration-200 ease-in-out ${notifications.pushGoals ? "translate-x-5" : "translate-x-0"}`} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Placeholder for other tabs */}
                    {(activeTab === "appearance" || activeTab === "security") && (
                        <div className="animate-in fade-in py-12 flex flex-col items-center justify-center text-center opacity-60">
                            {activeTab === "appearance" ? <Moon className="w-12 h-12 mb-4 text-secondary" /> : <Shield className="w-12 h-12 mb-4 text-secondary" />}
                            <h2 className="font-serif text-xl font-medium mb-2 capitalize">{activeTab} settings</h2>
                            <p className="text-sm max-w-sm">These settings are coming soon in our next update to Kaika AI.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
