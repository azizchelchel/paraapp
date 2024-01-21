import { Seo } from "@/ui/components/seo/seo";
import { RiSendPlaneFill } from "react-icons/ri";
import Navigation from "@/ui/components/navigation/navigation";
import { Footer } from "@/ui/components/navigation/footer";
import Avatar from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import Logo from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import Container from "@/ui/components/container/container";
export default function Home() {
  let deltaPlaneIcon = <RiSendPlaneFill />;
  return (
    <>
      <Seo title="Design System" description="description..." />
      <Navigation />
      <Container className="py-10 space-y-5">
        <Typography>Typography</Typography>
        <Typography variant="h1" theme="primary" component="h1">
          paragliding application
        </Typography>
        <Typography variant="h2" theme="secondary" component="h2">
          paragliding application
        </Typography>
        <Typography variant="h3" theme="black" component="h3">
          paragliding application
        </Typography>
        <Typography variant="h4" theme="gray" component="h4">
          paragliding application
        </Typography>
        <Typography variant="h5" theme="primary" component="h5">
          paragliding application
        </Typography>
        <Typography variant="display" theme="primary" component="div">
          paragliding application
        </Typography>
        <Typography variant="lead" theme="primary" component="p">
          paragliding application
        </Typography>
        <Typography variant="body-lg" theme="primary" component="span">
          paragliding application
        </Typography>
        <Typography variant="body-base" theme="primary" component="div">
          paragliding application
        </Typography>
        <Typography variant="display" theme="primary" component="div">
          paragliding application
        </Typography>
        <Typography variant="body-sm" theme="primary" component="div">
          paragliding application
        </Typography>
        <Typography variant="caption1" theme="primary" component="div">
          paragliding application
        </Typography>
        <Typography variant="caption2" theme="primary" component="div">
          paragliding application
        </Typography>
        <Typography variant="caption3" theme="primary" component="div">
          paragliding application
        </Typography>
        <Typography variant="caption4" theme="primary" component="div">
          paragliding application
        </Typography>
        <Typography>Buttons</Typography>
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
        <Typography>Variants</Typography>
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
        <Typography>Spinner</Typography>
        <div className="flex flex-col">
          <div className="flex items-center p-10 gap-10">
            <Spinner variant="primary" size="small" />
            <Spinner />
            <Spinner variant="white" size="large" animate="spin" />
          </div>
        </div>
        <Typography>Logo</Typography>
        <div className="flex flex-col">
          <div className="flex items-center p-10 gap-10">
            <Logo size="verySmall" />
            <Logo size="small" />
            <Logo />
            <Logo size="large" />
          </div>
        </div>
        <Typography>Avatar</Typography>
        <div className="flex flex-col">
          <div className="flex items-center p-10 gap-10">
            <Avatar size="small" src="/assets/images/me.jpg" alt="avatar" />
            <Avatar src="/assets/images/me.jpg" alt="avatar" />
            <Avatar size="large" src="/assets/images/me.jpg" alt="avatar" />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
