import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";
import { Textarea } from "@/components/ui/textarea";

const AppointmentFormDialog = ({ open, setOpen, appointment, onUpdate, dialogTrigger }) => {
    const [formData, setFormData] = useState({
        appointmentDateTime: "",
        doctorName: "",
        reasonForAppointment: "",
        additionalNotes: "",
    });


    useEffect(() => {
        if (open && appointment) {
            setFormData({
                appointmentDateTime: appointment.appointmentDateTime
                    ? appointment.appointmentDateTime.slice(0, 16)
                    : "",
                doctorName: appointment.doctorName || "",
                reasonForAppointment: appointment.reasonForAppointment || "",
                additionalNotes: appointment.additionalNotes || "",
            });
        }
    }, [open, appointment]);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleUpdate = async (e) => {
        console.log(formData)
        e.preventDefault();
        try {
            console.log(formData, "Success vala");
            const res = await axios.put(
                `${import.meta.env.VITE_API_BASE_URL}/appointment/update/${appointment.id}`,
                formData
            );
            toast.success("Appointment updated successfully!");
            setOpen(false);
            onUpdate();
        } catch (err) {
            console.error("Update failed", err);
            toast.error("Failed to update appointment.");
        }
    };


    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <form>
                <DialogTrigger asChild>
                    {dialogTrigger}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Appointment</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        
                        <label className="text-sm font-medium">Appointment Date & Time</label>
                        <Input
                            type="datetime-local"
                            name="appointmentDateTime"
                            value={formData.appointmentDateTime}
                            onChange={handleChange}
                        />

                        <label className="text-sm font-medium">Doctor Name</label>
                        <Input
                            name="doctorName"
                            value={formData.doctorName}
                            onChange={handleChange}
                        />

                        <label className="text-sm font-medium">Reason for Appointment</label>
                        <Textarea
                            name="reasonForAppointment"
                            value={formData.reasonForAppointment}
                            onChange={handleChange}
                        />

                        <label className="text-sm font-medium">Additional Notes</label>
                        <Textarea
                            name="additionalNotes"
                            value={formData.additionalNotes}
                            onChange={handleChange}
                        />
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button onClick={handleUpdate} type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default AppointmentFormDialog