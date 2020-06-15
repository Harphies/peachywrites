import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import './heroHeader.css'
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="primary-content">
          <p>{data.site.siteMetadata.home.description}</p>
        </div>
        <div id="mc_embed_signup">
          <form
            action="https://linkedin.us19.list-manage.com/subscribe/post?u=7afb7748d806c305dc0bb53e1&amp;id=3b81882f80"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            novalidate
          >
            <div className="clear">
              <input
                className="btn"
                type="submit"
                value="Subscribe to my newsletter"
                name="subsSubscribecribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </form>
        </div>
      </div>
    )}
  />
);
