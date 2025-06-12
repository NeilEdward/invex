import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({ className, ...props }) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 533.5 544.3"
            width="24"
            height="24"
          >
            <path
              fill="#4285F4"
              d="M533.5 278.4c0-17.7-1.6-35-4.6-51.6H272v97.8h146.9c-6.4 34.7-25 64.1-53.3 83.7v69.3h86.1c50.5-46.5 81.8-115.1 81.8-199.2z"
            />
            <path
              fill="#34A853"
              d="M272 544.3c72.6 0 133.5-24.1 178-65.6l-86.1-69.3c-23.9 16-54.4 25.4-91.9 25.4-70.6 0-130.4-47.6-151.8-111.4H31.1v70.7c44.6 88.1 135.5 150.2 240.9 150.2z"
            />
            <path
              fill="#FBBC05"
              d="M120.2 323.4c-10.2-30.7-10.2-63.5 0-94.2V158.5H31.1c-40.3 79.9-40.3 173.4 0 253.3l89.1-70.7z"
            />
            <path
              fill="#EA4335"
              d="M272 107.7c39.5-.6 77.3 14.1 106 40.5l79.1-79.1C417.5 25.2 346.4-.5 272 0 166.6 0 75.7 62.1 31.1 150.2l89.1 70.7C141.6 155.3 201.4 107.7 272 107.7z"
            />
          </svg>
          Login with Goggle
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  );
}
