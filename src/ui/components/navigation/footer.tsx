import { Typography } from "@/ui/design-system/typography/typography";
import Container from "../container/container";

export const Footer = () => {
  return (
    <div className="bg-gray">
      <Container className="flex justify-between pt-14">
        <div className="">
          <Typography variant="caption1" theme="white" weight="medium">
            Footer
          </Typography>
          <Typography variant="caption3" theme="gray" weight="medium">
            Chellal Aziz Copyright
          </Typography>
        </div>
        <div></div>
      </Container>
    </div>
  );
};
