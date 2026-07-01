const TOKEN = "PASTE_YOUR_ACCESS_TOKEN_HERE";

export async function Log(level, packageName, message) {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzExY3MwMjA2ODZAbWFsbGFyZWRkeXVuaXZlcnNpdHkuYWMuaW4iLCJleHAiOjE3ODI4ODg2MzQsImlhdCI6MTc4Mjg4NzczNCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjcxMDRmZDNhLTU0YTgtNDZmMC04OGJmLWY0ZDVmMGJlZTJhMiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFrZXNoIiwic3ViIjoiYjQ5NzBmYmMtMWM2Mi00ODg3LWIyOGUtZGMyMTE5N2RiMWE0In0sImVtYWlsIjoiMjMxMWNzMDIwNjg2QG1hbGxhcmVkZHl1bml2ZXJzaXR5LmFjLmluIiwibmFtZSI6ImFrZXNoIiwicm9sbE5vIjoiMjMxMWNzMDIwNjg2IiwiYWNjZXNzQ29kZSI6InhwUWRkZCIsImNsaWVudElEIjoiYjQ5NzBmYmMtMWM2Mi00ODg3LWIyOGUtZGMyMTE5N2RiMWE0IiwiY2xpZW50U2VjcmV0IjoiTXFRY25YQUdra3FzSlpQcSJ9.5sTl10yNZ4ZzvPMHrerRUUyF1fq5wHNT2XXOgKeseZg"}`,
        },
        body: JSON.stringify({
          stack: "frontend",
          level,
          package: packageName,
          message,
        }),
      }
    );

    const data = await response.json();
    console.log("Log response:", data);
  } catch (error) {
    console.error("Logging failed:", error);
  }
}