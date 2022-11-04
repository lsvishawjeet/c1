import React from "react";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { NavLink } from "react-router-dom";

const DigitalMarketing = () => {
  return (
    <>
      <div className="hacking">
        <div className="courseheading">
          <span
            style={{
              paddingBottom: "5px",
              borderBottom: "2px solid brown",
              fontSize: "xx-large",
            }}
          >
            Digital Marketing
          </span>
        </div>
        <div className="coursedetails">
          <div className="aboutcourse">
            <h3 style={{ textAlign: "center", paddingBottom: "30px" }}>
              Course Description
            </h3>
            <div className="coursedescriptionparah">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias aspernatur dignissimos earum voluptatem atque, vero
                quisquam suscipit quae consectetur quo iste natus neque
                voluptate magnam? Sunt cupiditate laudantium quis officia nam
                iure id error?
              </p>
            </div>
            <div className="coursetime">
              <h4 style={{ paddingTop: "5px" }}>Duration: 2 months</h4>
              <h4 style={{ paddingTop: "5px" }}>Fees: 20000 Rs</h4>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/contact"
              >
                <Button className="coursebutton">Enroll Now</Button>{" "}
              </NavLink>
            </div>
          </div>

          <div className="coursesyllabus">
            <div className="syllabusheading">
              <h3 style={{ textAlign: "center", paddingBottom: "30px" }}>
                Syllabus
              </h3>
            </div>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Module1: Understanding Digital Marketing
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Overview</li>
                    <li>Physical Vs Digital, Case Studies</li>
                    <li>Website essentials</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Module2: Landing Pages</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Call to Action</li>
                    <li>Respnsiveness</li>
                    <li>Domain &amp; Hosting</li>
                    <li>Content Creation Tools</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Module3: Google Ads Network</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Pay per Click Model</li>
                    <li>Different Ad Formats</li>
                    <li>Extensions &amp; Uses</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Module4: Keywords Research</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Significance</li>
                    <li>Tools</li>
                    <li>Bidding</li>
                    <li>Match Type &amp; Usage</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Module5: AD Ranking</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Quality Score, CTR</li>
                    <li>Search Query Report</li>
                    <li>Bidding Types</li>
                    <li>MCC Account</li>
                    <li>Shopping Ads</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  Module6: Search & Display Campaign
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Crafting perfect Ads</li>
                    <li>Ads Rotation</li>
                    <li>Conversion Tracking</li>
                    <li>Retargeting</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Module7: Search Engine Optimization
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Science behind search</li>
                    <li>Meta tags,Anchor Text</li>
                    <li>Description</li>
                    <li>Keywords,URLs</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Module8: Backlinking</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>DA,PA,Competitor Analysis</li>
                    <li>Guest POsts</li>
                    <li>Infographics,Quora</li>
                    <li>Medium &amp; Advance Strategies</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>Module9: Youtube Marketing</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Production &amp; Promotion</li>
                    <li>Tags,Keywords Titles</li>
                    <li>Thumbnails</li>
                    <li>Growth Strategies</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>
                  Module10: Social Media Marketing
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Understanding Customer Journey</li>
                    <li>Psychology behind Ads</li>
                    <li>Facebook page setup</li>
                    <li>Integrations, Publishing Tools</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>
                  Module11: Ads & Business Manager
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Account Struture,Audience Interest</li>
                    <li>Finder Hacks,Pixels,Retargeting,</li>
                    <li>Conversion Tracking,Ad Creatives,</li>
                    <li>Messenger Bots, Scaling Ads</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>Module12: Instagram</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Content Creation, Grid Style</li>
                    <li>Hashtag Research</li>
                    <li>Scheduling &amp; Automation</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header>Module13: Pinterest</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Creating Business Profile</li>
                    <li>Traffic From Tier-1 Countries</li>
                    <li>Creating Viral Pins</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="14">
                <Accordion.Header>Module14: Linkedin</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Profile Optimization</li>
                    <li>Creating Profational Content</li>
                    <li>Connecting With Industry</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="15">
                <Accordion.Header>Module15: Twitter Marketing</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Anatomy of Tweet</li>
                    <li>Retweet, Autotweet, Link Shortener</li>
                    <li>Spy Competitors, Trending Topics, Analytics</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="16">
                <Accordion.Header>Module16: Email Marketing</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Create Free Offers</li>
                    <li>Building Email Lists</li>
                    <li>Sequence &amp; Automation</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="17">
                <Accordion.Header>Module17: Google Analytics</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Measuring &amp; Improving Traffic</li>
                    <li>Local SEO, Outranking Competitors</li>
                    <li>Reports</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="18">
                <Accordion.Header>Module18: Search Console</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Understanding of Google Search Console</li>
                    <li>Analyze Keywords Performance</li>
                    <li>Sitemaps to Google Search</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="19">
                <Accordion.Header>
                  Module19: Google My Buisness
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Creation &amp; Optimizing Map Listing</li>
                    <li>Image SEO, Map Embeds</li>
                    <li>Outrank your Competition</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="20">
                <Accordion.Header>Module20: Copywriting</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Creative Writing </li>
                    <li>Science Behind The Usage Of Words</li>
                    <li>Powerful Calls To Action</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="21">
                <Accordion.Header>Module21: Graphic Designing</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Mastering Canva </li>
                    <li>Creating Content that Engages</li>
                    <li>Single Images, Carousels, Videos, GIFs</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="22">
                <Accordion.Header>Module22: Projects Hunting</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Companies Online Health Check Up</li>
                    <li>Shooting High Converting Mails</li>
                    <li>Follow ups, Conversions</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="23">
                <Accordion.Header>Module23: Jobs Hunting</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Building Digital Resume</li>
                    <li>Digging out Fresh Jobs</li>
                    <li>Scrapping Mail Ids, Presenting Yourself</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="24">
                <Accordion.Header>
                  Module24: Freelancing & Affiliate Marketing Concepts, Upsells
                  DownSel
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Concepts, Upsells DownSells</li>
                    <li>Brekdown of funnels</li>
                    <li>Scaling Profile</li>
                    <li>Paid &amp; Organic Techniques</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};
export default DigitalMarketing;
