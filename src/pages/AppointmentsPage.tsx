import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AppointmentActions } from "@/components/appointment-actions";
export interface Appointment {
  id: number;
  patient: {
    name: string;
    avatar: string;
  };
  payment: string;
  age: number;
  dateTime: string;
  fees: number;
}

export default function AppointmentsPage() {
  // This would typically come from an API or database
  const appointments: Appointment[] = [
    {
      id: 1,
      patient: {
        name: "Lucman M.",
        avatar: "/placeholder.svg",
      },
      payment: "CASH",
      age: 24,
      dateTime: "23 Aug 2024, 11:00 AM",
      fees: 40,
    },
    {
      id: 2,
      patient: {
        name: "Lucman M.",
        avatar: "/placeholder.svg",
      },
      payment: "CASH",
      age: 24,
      dateTime: "25 Aug 2024, 02:00 PM",
      fees: 40,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-gray-900 mb-6">All Appointments</h1>
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">#</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Fees</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id} className="hover:bg-gray-50">
                <TableCell>{appointment.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={appointment.patient.avatar} />
                      <AvatarFallback>{appointment.patient.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{appointment.patient.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                    {appointment.payment}
                  </Badge>
                </TableCell>
                <TableCell>{appointment.age}</TableCell>
                <TableCell>{appointment.dateTime}</TableCell>
                <TableCell>${appointment.fees}</TableCell>
                <TableCell className="text-right">
                  <AppointmentActions
                    onDelete={() => console.log("Delete", appointment.id)}
                    onComplete={() => console.log("Complete", appointment.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
