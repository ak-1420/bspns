import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";

export default function UserAccordion() {
  return (
    <div >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
          <Box
            sx={{
              display: "flex",
              alignItems: "align-left",
              flexDirection: "column",
              px: [1]
            }}
          >
            <Typography sx={{ size: "16px", fontWeight: "bold" }}>
              Mario Speedwagon
            </Typography>
            <Typography sx={{ size: "10px" }} variant="span">
              Super Admin
            </Typography>
          </Box>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      </Accordion>
    </div>
  );
}
