import { Button } from "@/ui/design-system/typography/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiSendPlaneFill } from "react-icons/ri";
export default function Home() {
  let deltaPlaneIcon = <RiSendPlaneFill />;
  return (
    <>
      <Typography variant="h3" theme="primary" component="div">
        paragliding application
      </Typography>
      <div className="flex items-center gap-2 p-10">
        <Button size="small" variant="accent">
          Accent
        </Button>
        <Button size="small" variant="secondary">
          secondary
        </Button>
        <Button size="small" variant="outline">
          outline
        </Button>
        <Button size="small" variant="disabled" disabled>
          disabled
        </Button>
        <Button
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
      <div className="flex gap-10">
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
    </>
  );
}
