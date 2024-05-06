import React from "react";
import { Header, Footer, QueryResult } from "../components";
import styled from "@emotion/styled";
import { widths, unit } from "../styles";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";

/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */

const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;

const Layout = ({ fullWidth, grid }) => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <>
      <Header />
      <QueryResult loading={loading} error={error} data={data}>
        <PageContainer fullWidth={fullWidth} grid={grid}>
          {data?.tracksForHome?.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </PageContainer>
      </QueryResult>
      <Footer />
    </>
  );
};

export default Layout;

/** Layout styled components */
const PageContainer = styled.div((props) => ({
  display: "flex",
  justifyContent: props.grid ? "center" : "top",
  flexDirection: props.grid ? "row" : "column",
  flexWrap: "wrap",
  alignSelf: "center",
  flexGrow: 1,
  maxWidth: props.fullWidth ? undefined : `${widths.regularPageWidth}px`,
  width: "100%",
  padding: props.fullWidth ? 0 : unit * 2,
  paddingBottom: unit * 5,
}));
