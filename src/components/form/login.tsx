import { GalleryVerticalEnd } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useAdminContext } from "@/hook/userAdminContext";
import axios from "axios";
import { toast } from "react-toastify";

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [state, setState] = useState<"admin" | "doctor">("admin");

  const [email, setEmail] = useState("admin@lucmanm.tech");
  const [password, setPassowrd] = useState("admin1234");

  const { backendUri, setaToken } = useAdminContext();

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      if (state === "admin") {
        const { data } = await axios.post<{ success: boolean; token: string }>(backendUri + "/api/v1/login", {
          email,
          password,
        });

        if (data.success ) {
          localStorage.setItem("aToken", data.token);
          setaToken(data.token);
        } else {
          toast.error("Invalid username and password");
        }
      }
    } catch (error) {
      console.log("LOGIN ERROR", error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a href="#" className="flex flex-col items-center gap-2 font-medium">
              <div className="flex h-8 w-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Lucman Tech.</span>
            </a>
            <h1 className="text-xl font-bold capitalize">Welcome to {state === "admin" ? "admin" : "doctor"} Login</h1>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">password</Label>
              <Input
                onChange={(e) => setPassowrd(e.target.value)}
                id="password"
                type="password"
                placeholder="admin@1234"
                value={password}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">Or</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Button variant="outline" className="w-full" onClick={() => setState("admin")}>
              Admin Login
            </Button>
            <Button variant="outline" className="w-full" onClick={() => setState("doctor")}>
              Doctor
            </Button>
          </div>
        </div>
      </form>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
