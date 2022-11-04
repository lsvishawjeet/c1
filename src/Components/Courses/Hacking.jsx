import React from "react";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { NavLink} from "react-router-dom";


const Hacking = () => {
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
            Ethical Hacking (EH1)
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
              <NavLink style={{textDecoration:"none", color:"white"}} to="/contact"><Button className="coursebutton">Enroll Now</Button> </NavLink>
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
                  Module1: Introduction to Ethical Hacking
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Introduction to Information Security</li>
                    <li>Information-Security-Threats</li>
                    <li>Introduction to Cyber Security</li>
                    <li>The CIA Triad</li>
                    <li>Who are Ha Types of Hackers</li>
                    <li>Introduction to Ethical Hacking</li>
                    <li>
                      Need for Ethical Ha1 Course OveGeneral Terminolog1 How To
                      become an Ethical Hacker
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Module2: Basics and Environment setup
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Introduction to OS Linux and it’s Evolution</li>
                    <li>Major Linux Distributions</li>
                    <li>Advantages of linux</li>
                    <li>Linux for Penetration Testing</li>
                    <li>Types of Hackers contd</li>
                    <li>Phases of Ethical Hacking</li>
                    <li>Cyber Security vs Ethical Hacking</li>
                    <li>
                      Software and Hardware Requirements for a Hacking Lab
                    </li>
                    <li>Installing and Configuring VMWare</li>
                    <li>Dual boot vs Virtual Machine</li>
                    <li>Choosing and Downloading Kali Distro</li>
                    <li>Configuring VM For Kali Linux</li>
                    <li>Installing Kali Linux 2019.4 on VMWare</li>
                    <li>
                      Virtual Network Configurations Explained – NAT vs Bridged
                      vs Host Only vs Internal
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Module3: Linux Refresher</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Introduction to Command Line</li>
                    <li>Windows command line</li>
                    <li>Linux command line</li>
                    <li>Linux File System</li>
                    <li>NTFS vs FAT vs EXT</li>
                    <li>Linux User Administration</li>

                    <li>Kali 2019.4 and linux file system overview</li>
                    <li>Linux Elementary Commands</li>
                    <li>Linux Networking Commands</li>
                    <li>History and grep command</li>
                    <li>Working with Linux User Administration</li>
                    <li>
                      Linux Working with Files, Permissions and Directories
                    </li>
                    <li>Working with Linux File Permissions</li>
                    <li>Linux Working with Groups</li>
                    <li>Linux Package Manager apt</li>
                    <li>Linux Useful Files</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Module4: Networking Refresher
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>The OSI Model – Open Systems Interconnection</li>
                    <li>More on OSI Model – Introduction to TCP-IP Model</li>
                    <li>TCP-IP v-s OSI – The Difference</li>
                    <li>Data Link Layer and MAC Addresses</li>
                    <li>Network Layer and IP Addresses</li>
                    <li>
                      Classful IP Addressing, Private and Special Addresses
                    </li>
                    <li>Classless IP Addressing</li>
                    <li>Transport Layer</li>
                    <li>Ports and Port Addressing</li>
                    <li>Proxies and Proxy Servers</li>
                    <li>Introduction to TOR</li>
                    <li>Introduction to VPN</li>
                    <li>Remote Login – SSH and telnet</li>
                    <li>Introduction to NAT and Port Forwarding</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Module5: Footprinting and Reconnaissance
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Introduction to Footprinting and Objectives</li>
                    <li>Footprinting through search Engines</li>
                    <li> Introduction to OSINT</li>
                    <li>Email Footprinting</li>
                    <li>Website Footprinting</li>
                    <li>Internet Archive</li>
                    <li>wget Mirroring</li>
                    <li>whois lookup</li>
                    <li>Network Footprinting</li>
                    <li>Introduction and Working of Traceroute</li>
                    <li>Traceroute Analysis</li>
                    <li>Shodan Introduction and First Look</li>
                    <li>WhatWeb</li>
                    <li>Wappalyzer</li>
                    <li>sublist3r</li>
                    <li>Subdomain Finder Websites</li>
                    <li>netdiscover</li>
                    <li>Google Dorks Explained – What is Google Hacking</li>
                    <li>
                      Working with Google Dorks – Google Dorking Practical
                    </li>
                    <li>Footprinting with Social Engineering</li>
                    <li>Footprinting Countermeasures</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Module6: Scanning</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Basics of Scanning</li>
                    <li>Scanning Methodology</li>
                    <li> Working with ping command for live hosts</li>
                    <li>Angry IP Scanner</li>
                    <li>TCP Flags</li>
                    <li>TCP 3-Way Handshake</li>
                    <li>Introduction to Port Scanning</li>
                    <li>Port Scanning Methodology</li>
                    <li>Types of Port Scanning – TCP Connect Scan</li>
                    <li>Types of Port Scanning – TCP Stealth Scan</li>
                    <li>Introduction to Nmap and First Look</li>
                    <li>Nmap – Port Scanning</li>
                    <li>Nmap – Advanced Port Scanning</li>
                    <li>Nmap – Types of Scans</li>
                    <li>Port Scanning with hping</li>
                    <li>Introduction to Banner Grabbing</li>
                    <li>Banner Grabbing with ID Serve</li>
                    <li>Banner Grabbing with NetCraft</li>
                    <li>Banner Grabbing with netcat</li>
                    <li>Scanning for Vulnerabilities</li>
                    <li>Nessus Vulnerability Scanner</li>
                    <li>nikto Web Vulnerability Scanner</li>
                    <li>WordPress Vulnerability Scanning with wpscan</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>Module7: Enumeration</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Introduction to Enumeration</li>
                    <li>Techniques of Enumeration</li>
                    <li>NetBIOS enumeration</li>
                    <li>SMB Enumeration</li>
                    <li>Working wiith NetBIOS and SMB Enumeration</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Module8: Cryptography</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Cryptography Concepts</li>
                    <li>Encryption Algorithms</li>
                    <li>Cryptography Tools</li>
                    <li>Public Key Infrastructure (PKI)</li>
                    <li>Hashing</li>
                    <li>Url Encryption</li>
                    <li>Encoding and Decoding</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>Module9: Stenography</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Cryptography Concepts</li>
                    <li>stenography types</li>
                    <li>Text Steganography</li>
                    <li>Image Steganography</li>
                    <li>Video Steganography</li>
                    <li>Audio Steganography</li>
                    <li>Stenography Tools</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>
                  Module10: Vulnerbilty analysis
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>what is Vulnerbilty Analysis</li>
                    <li>Vulnerability Assessment Concepts</li>
                    <li> Vulnerability Assessment Solutions</li>
                    <li>Vulnerability Assessment Tools</li>
                    <li>Vulnerability Assessment Reports</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>Module11: System Hacking</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>System Hacking Concepts</li>
                    <li>Cracking Passwords</li>
                    <li>Executing Applications</li>
                    <li>Hiding Files</li>
                    <li>Win xp</li>
                    <li>Windows 7</li>
                    <li>Windows 10</li>
                    <li>Introduction to System Hacking</li>
                    <li>Goals of System Hacking</li>
                    <li>Introduction to Password Cracking</li>
                    <li>Password Complexity</li>
                    <li>Types of Password Attacks</li>
                    <li>Active Online Attack</li>
                    <li>Password Guessing</li>
                    <li>Default Passwords</li>
                    <li>Online Malware Attack</li>
                    <li>Password List generation with crunch</li>
                    <li>Password Cracking with hashcat</li>
                    <li>Password Cracking with John the Ripper</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>Module12: Social Engenering</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Facebook Hacking</li>
                    <li>Instagram Hacking</li>
                    <li>Tewiter Hacking</li>
                    <li>Gmail Hacking</li>
                    <li>Social Engineering Concepts</li>
                    <li>Social Engineering Techniques</li>
                    <li>Insider Threats</li>
                    <li>Impersonation on Social Networking Sites</li>
                    <li>Identity Theft</li>
                    <li>Countermeasures</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header>Module13: Web pentesting</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Web Server Concepts</li>
                    <li>Web Server Attacks</li>
                    <li>Web Server Attack Methodology</li>
                    <li>Web Server Attack Tools</li>
                    <li>Countermeasures</li>
                    <li>os injection</li>
                    <li>xss dom</li>
                    <li>xss Reflect</li>
                    <li>xss Store</li>
                    <li>Sql injection</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="14">
                <Accordion.Header>Module14: Sniffing</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Introduction to Sniffing</li>
                    <li>How Sniffing Works</li>
                    <li>Types of Sniffing</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="15">
                <Accordion.Header>Module15: Firewall</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Introduction to Firewall concepts</li>
                    <li>Firewall Architecture</li>
                    <li>Types Of Firewalls</li>
                    <li>Introduction to IDS and IPS</li>
                    <li>IDS Detection Techniques</li>
                    <li>How to use practically firewall</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="16">
                <Accordion.Header>Module16: Wireless Hacking</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Wireless Concepts</li>
                    <li>Wireless Encryption</li>
                    <li>Wireless Threats</li>
                    <li>Wireless Hacking Methodology</li>
                    <li>Wireless Hacking Tools</li>
                    <li>wpa and wps and wpa2 password cracking</li>
                    <li>wifi cloning</li>
                    <li>Ap cloning</li>
                    <li>wifi Jamming</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="17">
                <Accordion.Header>Module17: Mobile hacking</Accordion.Header>
                <Accordion.Body>Mobile hacking</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="18">
                <Accordion.Header>Module18: Forensic basic</Accordion.Header>
                <Accordion.Body>Forensic basic</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="19">
                <Accordion.Header>
                  Module19: Cyber Crime Investigation How Work
                </Accordion.Header>
                <Accordion.Body>
                  Cyber Crime Investigation How Work
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hacking;
