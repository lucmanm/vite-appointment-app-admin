'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { defaultIamge } from '@/lib/assets'

interface ProfileData {
  name: string
  email: string
  password: string
  image: string
  specialty: string
  degree: string
  experience: string
  fees: string
  address: string
}

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Dr. John Doe',
    email: 'john.doe@example.com',
    password: '********',
    image: '/placeholder.svg?height=300&width=800',
    specialty: 'Cardiology',
    degree: 'MD, FACC',
    experience: '15 years',
    fees: '$200',
    address: '123 Medical Center, Health City, HC 12345'
  })

  const handleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleSave = (newData: Partial<ProfileData>) => {
    setProfileData({ ...profileData, ...newData })
    setIsEditing(false)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="relative w-full h-64 mb-8">
        <img
          src={defaultIamge}
          alt="Profile header"
        //   layout="fill"
        //   objectFit="cover"
          className="rounded-lg h-64 w-full object-cover"
        />
        <Button
          className="absolute bottom-4 right-4"
          onClick={handleEdit}
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </Button>
      </div>

      {isEditing ? (
        <EditableProfile data={profileData} onSave={handleSave} />
      ) : (
        <DisplayProfile data={profileData} />
      )}
    </div>
  )
}

function DisplayProfile({ data }: { data: ProfileData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProfileField label="Name" value={data.name} />
      <ProfileField label="Email" value={data.email} />
      <ProfileField label="Password" value={data.password} />
      <ProfileField label="Specialty" value={data.specialty} />
      <ProfileField label="Degree" value={data.degree} />
      <ProfileField label="Experience" value={data.experience} />
      <ProfileField label="Fees" value={data.fees} />
      <ProfileField label="Address" value={data.address} />
    </div>
  )
}

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{label}</h3>
      <p className="text-gray-600">{value}</p>
    </div>
  )
}

function EditableProfile({ data, onSave }: { data: ProfileData; onSave: (data: Partial<ProfileData>) => void }) {
  const [formData, setFormData] = useState(data)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <EditableField label="Name" name="name" value={formData.name} onChange={handleChange} />
      <EditableField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
      <EditableField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
      <EditableField label="Image URL" name="image" value={formData.image} onChange={handleChange} />
      <EditableField label="Specialty" name="specialty" value={formData.specialty} onChange={handleChange} />
      <EditableField label="Degree" name="degree" value={formData.degree} onChange={handleChange} />
      <EditableField label="Experience" name="experience" value={formData.experience} onChange={handleChange} />
      <EditableField label="Fees" name="fees" value={formData.fees} onChange={handleChange} />
      <div className="col-span-full">
        <Label htmlFor="address">Address</Label>
        <Textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1"
        />
      </div>
      <div className="col-span-full">
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  )
}

function EditableField({ label, name, type = "text", value, onChange }: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1"
      />
    </div>
  )
}

