import { Button } from "@/components/ui/button"
import { X, Check } from 'lucide-react'

interface AppointmentActionsProps {
  onDelete: () => void
  onComplete: () => void
}

export function AppointmentActions({ onDelete, onComplete }: AppointmentActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
        onClick={onDelete}
      >
        <X className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-green-500 hover:text-green-600 hover:bg-green-50"
        onClick={onComplete}
      >
        <Check className="h-4 w-4" />
      </Button>
    </div>
  )
}

