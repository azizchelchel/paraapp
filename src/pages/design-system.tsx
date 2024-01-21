import Container from "@/ui/components/container/container";
import { Seo } from "@/ui/components/seo/seo";
import Avatar from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import Logo from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import Navigation from "@/ui/components/navigation/navigation";
import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const DesignSystem = () => {
  return (
    <>
      <Seo title="Design System" description="description..." />
      <Navigation />
      <Container className="py-10 space-y-20">
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
        <div className="flex flex-col">
          <p>spinner</p>
          <div className="flex items-center p-10 gap-10">
            <Spinner variant="primary" size="small" />
            <Spinner />
            <Spinner variant="white" size="large" animate="spin" />
          </div>
        </div>
        <div className="flex flex-col">
          <p>logo</p>
          <div className="flex items-center p-10 gap-10">
            <Logo size="verySmall" />
            <Logo size="small" />
            <Logo />
            <Logo size="large" />
          </div>
        </div>

        <div className="flex flex-col">
          <p>Avatar</p>
          <div className="flex items-center p-10 gap-10">
            <Avatar size="small" src="/assets/images/avatar.png" alt="avatar" />
            <Avatar src="/assets/images/avatar.png" alt="avatar" />
            <Avatar size="large" src="/assets/images/avatar.png" alt="avatar" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default DesignSystem;
