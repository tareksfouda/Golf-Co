import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 } from 'uuid'

const PackageWrap = styled.section`
  //   background-color: #f6f9f2;
  padding: 50px 0 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PackageGraphic = styled.div`
  width: 25em;
  padding: .5em;
  img {
    padding: 1em;
    background-color: #e4ecd9;
    border-radius: 100%;
    height: 5em;
    width: 5em;
  }
  @media (min-width: 768px) {
    max-width: 258px;
    margin: auto 45px;
  }

  @media (max-width: 768px) {
    max-width: 200px;
    margin: auto;
  }
`;

const PackageHeading = styled.p`
  height: 41px;
  font-size: 1.2em;
  font-weight: 800;
  text-transform: uppercase;
`;

const PackageBody = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  margin-bottom: 2.5em;
  @media (min-width: 768px) {
    // width: 280px;
    height: 80px;
  }
`;

const Package = ({data}) => { 
return <PackageGraphic>
  <img src={data.image.publicURL} alt="Tailor Made" />
  <PackageHeading>{data.heading}</PackageHeading>
  <PackageBody>{data.description}</PackageBody>
  <a href="/" className="button is-success is-rounded">SAMPLE PACKAGE</a>
</PackageGraphic>
};

const ListPackages = ({ data }) => {
  return <PackageWrap>
    {data.packages.map((data) => <Package key={v4()} data={data} />)}
  </PackageWrap>
};

export default ListPackages;

ListPackages.propTypes = {
  data: PropTypes.object.isRequired
};
