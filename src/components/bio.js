/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Image from "gatsby-image"

const Bio = ({ avatar, authorName, authorSummary }) => {
  // Set these values by editing "siteMetadata" in gatsby-config.js
  console.log(authorName);
  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={authorName || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {authorName && (
        <p>
          Written by <strong>{authorName}</strong><br/> {authorSummary || null}
        </p>
      )}
    </div>
  )
}

export default Bio
