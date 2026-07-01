import { useState, useEffect } from "react";
import { fetchNotifications } from "../apis/notifications";

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        setLoading(true);

        const data = await fetchNotifications();

        setNotifications(data.notifications || []);
        setTotal(data.total || 0);
        setTotalPages(data.totalPages || 1);

        setError(null);
      } catch (err) {
        setError(err.message || "Unable to fetch notifications");
      } finally {
        setLoading(false);
      }
    };

    loadNotifications();
  }, []);

  return {
    notifications,
    total,
    totalPages,
    loading,
    error,
  };
}