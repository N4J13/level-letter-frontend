import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Gamepad2, Library, ListIcon, Power, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/hooks/useAuth";
import { generateImageUrl } from "@/lib/utils";
import useCntrlShortcut from "@/lib/hooks/useCntrlShortcut";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  useCntrlShortcut("m", () => navigate("/profile"));
  useCntrlShortcut(",", () => navigate("/my-games"));
  useCntrlShortcut("l", () => navigate("/lists"));
  useCntrlShortcut("q", () => logout());
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={
              user?.profile_pic
                ? generateImageUrl(user.profile_pic)
                : "https://github.com/shadcn.png"
            }
          />
          <AvatarFallback>{user?.username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <DropdownMenuContent className="bg-background-secondary left-6 border-slate-800 min-w-56">
          <DropdownMenuLabel className="text-white">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/profile")}>
            <User size={16} />
            <span>Profile</span>
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/my-games")}>
            <Gamepad2 size={16} />
            <span>My Games</span>
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/collections")}>
            <Library size={16} />
            <span>Collections</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/lists")}>
            <ListIcon size={16} />
            <span>Lists</span>
            <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => logout()}>
            <Power size={16} />
            <span>Logout</span>
            <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default Profile;
