"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { UserPlus, Users } from "lucide-react";

type User = {
  id: number;
  username: string;
  role: string;
};

export default function DataUserPage() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, username: "admin", role: "Administrator" },
    { id: 2, username: "user1", role: "User" },
  ]);

  const [newUser, setNewUser] = useState({ username: "", role: "" });

  const handleAddUser = () => {
    if (!newUser.username || !newUser.role) return;
    setUsers((prev) => [...prev, { id: Date.now(), ...newUser }]);
    setNewUser({ username: "", role: "" });
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-background text-foreground flex justify-center">
      <div className="w-full max-w-5xl space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            Data User
          </h1>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                Tambah User
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-xl border border-border shadow-xl">
              <DialogHeader>
                <DialogTitle className="text-xl flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-primary" />
                  Tambah User
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 py-2">
                <div className="space-y-1">
                  <Label htmlFor="username" className="my-2">
                    Username
                  </Label>
                  <Input
                    id="username"
                    placeholder="Masukkan username"
                    value={newUser.username}
                    onChange={(e) =>
                      setNewUser({ ...newUser, username: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    placeholder="Masukkan role"
                    value={newUser.role}
                    onChange={(e) =>
                      setNewUser({ ...newUser, role: e.target.value })
                    }
                    className="my-2"
                  />
                </div>

                <Button onClick={handleAddUser} className="w-full mt-2">
                  Simpan
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="rounded-lg border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
