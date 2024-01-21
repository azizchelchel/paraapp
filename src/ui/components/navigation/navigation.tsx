import React from "react";
import Container from "../container/container";
import Logo from "../../design-system/logo/logo";
import { Typography } from "../../design-system/typography/typography";
import { Button } from "../../design-system/button/button";
import Link from "next/link";
import { ActiveLink } from "./active-link";

const Navigation = () => {
  return (
    <div className="border-b-2 border-gray-400 ">
      <Container className="flex justify-between items-center py-1.5 gap-7">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="small" />
            <div className="flex flex-col">
              <div className="text-gray font-extrabold text-[24px]">
                Paragliding Application
              </div>
              <Typography variant="caption4" component="span" theme="gray">
                Trouver de l'inspiration et reçois des feedbacks
              </Typography>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <Typography
            variant="caption3"
            component="div"
            className="flex items-center gap-7"
          >
            <ActiveLink href="/design-system">Design System</ActiveLink>
            <ActiveLink href="/projets">Projets</ActiveLink>
            <ActiveLink href="/formations">Formations</ActiveLink>
            <ActiveLink href="/contacts">Contacts</ActiveLink>
          </Typography>

          <div className="flex gap-2">
            <Button size="small">Connexion</Button>
            <Button size="small" variant="secondary">
              Rejoindre
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
