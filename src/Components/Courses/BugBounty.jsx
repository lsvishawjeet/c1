import React from "react";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { NavLink } from "react-router-dom";

const BugBounty = () => {
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
            Bug Bounty (EH2)
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
                <Accordion.Header>Module1: Introduction</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Course Introduction and Overview</li>
                    <li> Why you should take this</li>
                    <li>Teaser of Offensive Approach to Hunt Bugs</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Module2: Information Gathering Basic Terminology
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Information Gathering Basic Terminology</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Module3: Introduction to BurpSuit
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Step how to configure</li>
                    <li>How to work spider</li>
                    <li>How to work repeater</li>
                    <li>How to work intruder</li>
                    <li>How to work sequencer</li>
                    <li>How to pentest with burpsuit</li>
                    <li>How to change query perameter </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Module4: All Xss Attacks And Prevention
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Background concept about xss</li>
                    <li>Backround xss</li>
                    <li>Basic xss</li>
                    <li>Basic xss on lab</li>
                    <li>Manual building xss vector</li>
                    <li>Xss through filter bypass xss payload on lab</li>
                    <li>Xss on live website</li>
                    <li>Xss hunting</li>
                    <li>Xss through header perameter</li>
                    <li>Reflected xss vs stored xss</li>
                    <li>Exploitation of xss redirection</li>
                    <li>Exploitation of xss phishing</li>
                    <li>Exploitation of xss cookies stiling</li>
                    <li>Xss through file uploading</li>
                    <li>Xss through remote file Inclusion</li>
                    <li>Convert self xss to reflect xss</li>
                    <li>Walkthrough disscovered xss by pentester hackerone</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Module5: Host Header Injection
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Overview host header Injection</li>
                    <li>Host header attack open redirection</li>
                    <li>Host header attack password reset posioning</li>
                    <li>Host header attack xss through</li>
                    <li>
                      Walkthrough disscovered Host header He by pentester
                      hackerone
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Module6: Url Redirection</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Background concept about url redirection</li>
                    <li>Url Redirection through Get Perameter</li>
                    <li> Url Redirection through path Fragment</li>
                    <li>POc of Url Redirection</li>
                    <li>
                      walkthrough disscovered Url Redirection He by pentester
                      hackerone
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>Module7: Parameter Tempring</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Background concept of parameter tempring</li>
                    <li>Type of perameter</li>
                    <li>Get perameter</li>
                    <li>Post perameter</li>
                    <li>Parameter modifiction</li>
                    <li>Parameter tempring exapmle</li>
                    <li>Poc of paremeter tempring</li>
                    <li>
                      walkthrough disscovered perameter tempring by pentester
                      hackerone
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Module8: Html Injection</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Background concept of html injection</li>
                    <li>Website Defacement</li>
                    <li>Examples</li>
                    <li>POC</li>
                    <li>
                      Walkthrough disscovered Html Injection by pentester
                      hackerone
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>Module9: File Inclusion</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Background concept of file inclusion</li>
                    <li> Lfi</li>
                    <li>Rfi</li>
                    <li>Lfi Vs Rfi</li>
                    <li>Direct page request</li>
                    <li>Path traversal</li>
                    <li>Uploaded file backdoor</li>
                    <li>Insecure extention file handling</li>
                    <li>Directory listing</li>
                    <li>File size</li>
                    <li>File type</li>
                    <li>Malware uploaded</li>
                    <li>Hunting of file inclusion</li>
                    <li>Exploitation of file inclusion</li>
                    <li>POC</li>
                    <li>
                      &gt;Walkthrough disscovered file Inclusion He by pentester
                      hackerone
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>
                  Module10: Missinginsufficient SPF record
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Backdoor concept</li>
                    <li>Testing Spf</li>
                    <li>Explotation Spf</li>
                    <li>Poc</li>
                    <li>
                      walkthrough disscovered Spf Record by pentester hackerone
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>
                  Module11: Insecure CORS Configuration
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Background concept</li>
                    <li>Insecure CORS by Checking Response Header</li>
                    <li>Insecure CORS through Request Header</li>
                    <li>Exploitation of Insecure CORS</li>
                    <li>POc</li>
                    <li>walkthrough disscovered Cors by pentester hackerone</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>
                  Module12: Server Side Request Forgery
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li> Backdoor concept</li>
                    <li> Ssrf Testing</li>
                    <li> Ssrf on Lab Web</li>
                    <li> Exploitation of ssrf attack</li>
                    <li> poc</li>
                    <li>
                      {" "}
                      walkthrough disscovered ssrf by pentester hackerone
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header>
                  Module13: Critical File Found
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li> Background concept about critical file found</li>
                    <li> Critical file found on live web</li>
                    <li> Critcal file found live 2</li>
                    <li> POC</li>
                    <li>
                      {" "}
                      Walkthrough disscovered critical file found by pentester
                      hackerone
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="14">
                <Accordion.Header>
                  Module14: Source Code Disclosure
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Background concept of source code Disclosure</li>
                    <li>Source code Disclosure on lab</li>
                    <li>POC</li>
                    <li>
                      Walkthrough disscovered source code disclousure by
                      pentester hackerone
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="15">
                <Accordion.Header>
                  Module15: Cross Site Request Forgery
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Background concept about csrf</li>
                    <li>Injection point for csrf</li>
                    <li>Csrf on logout page</li>
                    <li>Csrf live</li>
                    <li>CSRF page on some critical Business Logic Page</li>
                    <li>POC</li>
                    <li>Walkthrough disscovered csrf by pentester hackerone</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="16">
                <Accordion.Header>
                  Module16: Hostile Subdomain Takeover
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li> Background concept of subdomain takeover</li>
                    <li> How to takeover sub domain</li>
                    <li> Prevention technique</li>
                    <li> Hostile subdomain takeover live web</li>
                    <li> POV</li>
                    <li>
                      {" "}
                      Walkthrough disscovered subdomain takeover by pentester
                      hackerone
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="17">
                <Accordion.Header>Module17: SQL Injection</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Background concept of sql injection</li>
                    <li>SQL injection lab setup</li>
                    <li>Injection pointing for sql injection</li>
                    <li>Learn sql query fixing</li>
                    <li>Sqli get base</li>
                    <li>Exploitaion of get based</li>
                    <li>Sqli post base</li>
                    <li>Exploitaion of post base</li>
                    <li>Sqli header based</li>
                    <li>Exploitation of header base sqli</li>
                    <li>Sqli cookies base</li>
                    <li>Exploitaion of cookies base</li>
                    <li>Authentication bypass sqli</li>
                    <li>Authentication of sqli get based</li>
                    <li>Authentication of sqli post base</li>
                    <li>Automation of sqli</li>
                    <li>Sql on live web</li>
                    <li>POC</li>
                    <li>
                      Walkthrough disscovered sql injection by pentester
                      hackerone
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="18">
                <Accordion.Header>Module18: Command Injection</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Backdoor concept of command injection</li>
                    <li>How to acess systemm using coomand injection</li>
                    <li>Command injection on live web</li>
                    <li>POC</li>
                    <li>
                      Walkthrough disscovered command injeciton by pentester
                      hackerone
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="19">
                <Accordion.Header>Module19: File Uploading</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Background concept about file uploading</li>
                    <li>File uploading using lfi</li>
                    <li>File uploading using rfi</li>
                    <li>How to bpass file uploading security</li>
                    <li>How to bypass extention filtering</li>
                    <li>POC</li>
                    <li>
                      Walkthrough disscovered file uploading by pentester
                      hackerone
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="20">
                <Accordion.Header>
                  Module20: XML External Entity Injection
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Background concept</li>
                    <li>How to work xml</li>
                    <li>How to create payload</li>
                    <li>How to exploit</li>
                    <li>How to bypass</li>
                    <li>POC</li>
                    <li>Walkthrough disscovered xml by pentester hackerone</li>
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
export default BugBounty;
