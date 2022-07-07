import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LICENSE_SEARCH_PAGE_ROUTE, ACTIVATE_KEY_ROUTE } from "Routes";

const title = "CANCEL AND GO BACK TO DASHBOARD";
const link = "/dashboard";

const navMap = new Map();
navMap.set("/", {
  nav: false,
  content: false,
});
navMap.set("/dashboard", {
  nav: true,
  content: false,
});
navMap.set("/license/generate", {
  nav: true,
  content: true,
  title,
  link,
});
navMap.set(LICENSE_SEARCH_PAGE_ROUTE, {
  nav: true,
  content: true,
  title,
  link,
});
navMap.set(ACTIVATE_KEY_ROUTE, {
  nav: true,
  content: true,
});

const Sidenav = (props) => {
  const location = useLocation();
  const [data, setData] = useState(navMap.get("/"));

  useEffect(() => {
    setData(navMap.get(location.pathname) || navMap.get("/"));
  }, [location]);

  return (
    <>
      {data.nav && (
        <Grid item container direction="column" {...props}>
          {data.content && (
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <Grid
                item
                container
                alignItems="center"
                justifyContent="center"
                p={5}
                pt={8}
              >
                <Grid item xs={1} sx={{ fontWeight: 600 }}>
                  {"<"}
                </Grid>
                <Grid item xs marginLeft={1}>
                  <Typography
                    variant="caption"
                    pr={4}
                    marginLeft={1.5}
                    color="primary"
                    fontWeight={600}
                    lineHeight={0}
                  > BACK TO
                  </Typography>
                  <Typography
                    variant="caption"
                    pr={4}
                    color="primary"
                    fontWeight={600}
                    lineHeight={0}
                  > DASHBOARD
                  </Typography>
                </Grid>
              </Grid>
            </Link>
          )}
        </Grid>
      )}
    </>
  );
};

export default Sidenav;
