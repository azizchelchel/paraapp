import { Spinner } from "@/ui/design-system/sminner/spinner";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiSendPlaneFill } from "react-icons/ri";
import Logo from "@/ui/design-system/logo/logo";
export default function Home() {
  let deltaPlaneIcon = <RiSendPlaneFill />;
  return (
    <>
      <Typography variant="h3" theme="primary" component="div">
        paragliding application
      </Typography>
      <div className="flex items-center gap-2 p-10">
        <Button isLoading size="small" variant="accent">
          Accent
        </Button>
        <Button isLoading size="small" variant="secondary">
          secondary
        </Button>
        <Button isLoading size="small" variant="outline">
          outline
        </Button>
        <Button isLoading size="small" variant="disabled" disabled>
          disabled
        </Button>
        <Button
          isLoading
          size="small"
          variant="iconButton"
          icon={{ icon: RiSendPlaneFill }}
        />
      </div>
      <div className="flex items-center gap-2 p-10">
        <Button size="medium" variant="accent">
          Accent
        </Button>
        <Button size="medium" variant="secondary">
          secondary
        </Button>
        <Button size="medium" variant="outline">
          outline
        </Button>
        <Button size="medium" variant="disabled" disabled>
          disabled
        </Button>
        <Button
          size="medium"
          variant="iconButton"
          icon={{ icon: RiSendPlaneFill }}
        />
      </div>
      <div className="flex items-center gap-2 p-10">
        <Button size="large" variant="accent">
          Accent
        </Button>
        <Button size="large" variant="secondary">
          secondary
        </Button>
        <Button size="large" variant="outline">
          outline
        </Button>
        <Button
          size="large"
          icon={{ icon: RiSendPlaneFill }}
          variant="disabled"
          disabled
        >
          disabled
        </Button>
        <Button
          size="large"
          variant="iconButton"
          icon={{ icon: RiSendPlaneFill }}
          iconPosition="left"
        />
      </div>
      <div className="flex gap-10 p-10">
        <Button
          size="large"
          variant="iconButton"
          icon={{ icon: RiSendPlaneFill }}
          iconTheme="secondary"
        />
        <Button
          size="large"
          variant="iconButton"
          icon={{ icon: RiSendPlaneFill }}
          iconTheme="gray"
        />
        <Button
          size="large"
          icon={{ icon: RiSendPlaneFill }}
          iconTheme="accent"
          variant="iconButton"
        />
      </div>
      <div className="flex items-center p-10 gap-10">
        <Spinner variant="primary" size="small" />
        <Spinner />
        <Spinner variant="white" size="large" animate="spin" />
      </div>
      <div className="flex items-center p-10 gap-10">
        <Logo size="verySmall" />
        <Logo size="small" />
        <Logo />
        <Logo size="large" />
      </div>
    </>
  );
}
