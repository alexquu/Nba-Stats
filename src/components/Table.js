import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGlobalContext } from "../context";

const DenseTable = () => {
  const { playerStats, isStatFound } = useGlobalContext();

  return (
    <>
      {!isStatFound ? (
        <h4 className="noData">No data found, try another season</h4>
      ) : (
        <TableContainer
          sx={{ marginTop: "8em", width: "75%", border: "1px solid black" }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "rgb(25, 25, 25)" }}>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  ASTPG
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  BLKPG
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  DREB
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  %FG3
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  FG3A
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  FG3M
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  FG_PCT
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  FGA
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  FGM
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  FT_PCT
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {playerStats.map((stat) => (
                <TableRow
                  key={stat.player_id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: "rgb(145,145,145)",
                  }}
                >
                  <TableCell align="center">{stat.ast}</TableCell>
                  <TableCell align="center">{stat.blk}</TableCell>
                  <TableCell align="center">{stat.dreb}</TableCell>
                  <TableCell align="center">{stat.fg3_pct}</TableCell>
                  <TableCell align="center">{stat.fg3a}</TableCell>
                  <TableCell align="center">{stat.fg3m}</TableCell>
                  <TableCell align="center">{stat.fg_pct}</TableCell>
                  <TableCell align="center">{stat.fga}</TableCell>
                  <TableCell align="center">{stat.fgm}</TableCell>
                  <TableCell align="center">{stat.ft_pct}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableHead>
              <TableRow sx={{ backgroundColor: "rgb(25, 25, 25)" }}>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  FTA
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  FTM
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  GAMES
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  MIN
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  OREB
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  PF
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  PTS
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  REB
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  STL
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bolder", color: "rgb(230, 216, 216)" }}
                >
                  TURNOVER
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {playerStats.map((stat) => (
                <TableRow
                  key={stat.player_id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    textAlign: "center",
                    backgroundColor: "rgb(145,145,145)",
                  }}
                >
                  <TableCell align="center">{stat.fta}</TableCell>
                  <TableCell align="center">{stat.ftm}</TableCell>
                  <TableCell align="center">{stat.games_played}</TableCell>
                  <TableCell align="center">{stat.min}</TableCell>
                  <TableCell align="center">{stat.oreb}</TableCell>
                  <TableCell align="center">{stat.pf}</TableCell>
                  <TableCell align="center">{stat.pts}</TableCell>
                  <TableCell align="center">{stat.reb}</TableCell>
                  <TableCell align="center">{stat.stl}</TableCell>
                  <TableCell align="center">{stat.turnover}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default DenseTable;
