
import { cn } from "@/lib/utils";
import AnimatedShinyText from "../../components/ui/animated-shiny-text";

export default  function AnimatedShinyTextDemo( { name, title, phone }) {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center">
      <div
        className={cn(
          "group   text-white transition-all ease-in  hover:text-black dark:hover:text-white",
        )}
      >
        <AnimatedShinyText className="flex-col flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span className="text-2xl">✨ {name}</span>
          <span className="text-sm">{title}</span>
          <span className="text-sm">{phone}</span>


        </AnimatedShinyText>
      </div>
    </div>
  );
}
