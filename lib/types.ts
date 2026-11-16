export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  subject: string;
  message: string;
}

export interface ActivityItem {
  id: string;
  user: string;
  action: string;
  application: "SurakshithNet" | "YuvaMitra" | "Portal";
  time: string;
  status: "Success" | "Completed" | "Blocked" | "Pending";
}

export interface UserRecord {
  id: string;
  name: string;
  email: string;
  role: "Parent" | "Admin" | "Student" | "User";
  joined: string;
  status: "Active" | "Pending" | "Banned";
}

export interface ThreatLog {
  id: string;
  time: string;
  threatType: string;
  sourceIp: string;
  actionTaken: string;
  status: "Secured" | "Filtered" | "Critical";
}

export interface TopResource {
  id: string;
  title: string;
  type: string;
  category: string;
  downloads: string;
  rating: string;
}

export interface TrafficSource {
  source: string;
  users: string;
  change: string;
  isPositive: boolean;
}
