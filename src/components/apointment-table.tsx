"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Appointment {
  id: number;
  patientName: string;
  age: number;
  dateTime: string;
  doctor: string;
  fees: number;
}

const mockAppointments: Appointment[] = [
  { id: 1, patientName: "John Doe", age: 35, dateTime: "2023-07-15 10:00 AM", doctor: "Dr. Smith", fees: 150 },
  { id: 2, patientName: "Jane Smith", age: 28, dateTime: "2023-07-15 11:30 AM", doctor: "Dr. Johnson", fees: 175 },
  { id: 3, patientName: "Bob Brown", age: 42, dateTime: "2023-07-15 02:00 PM", doctor: "Dr. Williams", fees: 200 },
  { id: 4, patientName: "Alice Green", age: 55, dateTime: "2023-07-16 09:30 AM", doctor: "Dr. Davis", fees: 160 },
  { id: 5, patientName: "Charlie Wilson", age: 30, dateTime: "2023-07-16 03:30 PM", doctor: "Dr. Taylor", fees: 190 },
];

export default function AppointmentsTable() {
  const [appointments] = useState<Appointment[]>(mockAppointments);

  const handleAction = (id: number) => {
    // This is a placeholder for the action. You can implement the actual logic here.
    console.log(`Action triggered for appointment ${id}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b text-left">#</th>
            <th className="py-2 px-4 border-b text-left">Patient's Name</th>
            <th className="py-2 px-4 border-b text-left">Age</th>
            <th className="py-2 px-4 border-b text-left">Date & Time</th>
            <th className="py-2 px-4 border-b text-left">Doctor</th>
            <th className="py-2 px-4 border-b text-left">Fees</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{appointment.id}</td>
              <td className="py-2 px-4 border-b">{appointment.patientName}</td>
              <td className="py-2 px-4 border-b">{appointment.age}</td>
              <td className="py-2 px-4 border-b">{appointment.dateTime}</td>
              <td className="py-2 px-4 border-b">{appointment.doctor}</td>
              <td className="py-2 px-4 border-b">${appointment.fees}</td>
              <td className="py-2 px-4 border-b">
                <Button onClick={() => handleAction(appointment.id)} variant="outline" size="sm">
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
