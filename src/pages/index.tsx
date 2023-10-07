import { Typography } from "@/ui/design-system/typography/typography";
export default function Home() {
  return (
    <>
      <Typography variant="display" theme="primary" component="div">
        paragliding application
      </Typography>
      <Typography variant="h1" theme="secondary" component="div">
        paragliding application
      </Typography>
      <Typography variant="h2" theme="gray" component="div">
        paragliding application
      </Typography>
      <Typography variant="h3" theme="white" component="div">
        paragliding application
      </Typography>
      <Typography variant="h4" component="div">
        paragliding application
      </Typography>
      <Typography variant="h5" component="div">
        paragliding application
      </Typography>
      <Typography variant="lead" component="div">
        paragliding application
      </Typography>
      <Typography variant="body-lg" weight="regular" component="div">
        paragliding application
      </Typography>
      <Typography variant="body-sm" weight="medium" component="div">
        paragliding application
      </Typography>
      <Typography variant="caption1" weight="medium" component="div">
        paragliding application
      </Typography>
      <Typography
        variant="caption2"
        theme="gray"
        weight="medium"
        component="div"
        className="border-gray-700 bg-primary-200 border-2"
      >
        paragliding application
      </Typography>
    </>
  );
}
