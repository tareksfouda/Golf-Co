import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from 'prop-types'
import logo from '../img/logo.svg'

const Dialog = ({data}) => <article className={`message is-primary`}>
  <div className="message-header">
    <img id="image" src={data.icon.publicURL} />
    <p>{data.header}</p>
  </div>
  <div className="message-body">
    {data.message}
  </div>
</article>

const Tags = () => <div />;

const Cart = () => <div />;

const Details = ({data}) => {
console.log(data);

return <Details className="columns">
  <div className="column is-three-quarters">
    {data.dialogs.map(dialog => <Dialog data={data} />)}
    <Tags />
    <h1>About ({data.title})</h1>
    <p>{data.description}</p>
  </div>
  <div className="column is-one-quarters">
    <Cart />
  </div>
</Details>
};

export default Details;

Details.propTypes = {
  data: PropTypes.object.isRequired,
}