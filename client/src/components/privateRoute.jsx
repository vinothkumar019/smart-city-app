import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [ok, setOk] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token === "null" || token === "undefined" || token.trim() === "") {
      setOk(false);
      setLoading(false);
      return;
    }

    fetch("http://localhost:5000/api/auth/verify", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not authenticated");
        return res.json();
      })
      .then(() => setOk(true))
      .catch(() => {
        localStorage.removeItem("token"); // cleanup stale token
        setOk(false);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Checking authentication…</div>;
  return ok ? children : <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;

