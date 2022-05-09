<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <article>
        <header>
            <h1>GaMon Report</h1>
            <section typeof="sa:AuthorsList">
                <h2>Authors</h2>
                <ul>
                    <li typeof="sa:ContributorRole" property="schema:author">
                        <span typeof="schema:Person">
                            <meta property="schema:givenName" content="Mihnea" />
                            <meta property="schema:familyName" content="Vlaiduc" />
                            <span property="schema:name">Mihnea Vlaiduc</span>
                        </span>
                        <ul>
                            <li property="schema:roleContactPoint" typeof="schema:ContactPoint">
                                <a href="mailto:mihneavlaiduc@yahoo.com"
                                    property="schema:email">mihneavlaiduc@yahoo.com</a>
                            </li>
                            <li property="schema:roleContactPoint" typeof="schema:ContactPoint">
                                <a href="tel:0742298993" title="Click to Call">0742298993</a>
                            </li>
                        </ul>
                    </li>
                    <li typeof="sa:ContributorRole" property="schema:author">
                        <span typeof="schema:Person">
                            <meta property="schema:givenName" content="Lorian" />
                            <meta property="schema:additionalName" content="Andrei" />
                            <meta property="schema:familyName" content="Sandu" />
                            <span property="schema:name">Lorian Andrei Sandu</span>
                        </span>
                        <ul>
                            <li property="schema:roleContactPoint" typeof="schema:ContactPoint">
                                <a href="mailto:loriansandu@gmail.com"
                                    property="schema:email">loriansandu@gmail.com</a>
                            </li>
                            <li property="schema:roleContactPoint" typeof="schema:ContactPoint">
                                <a href="tel:0729294100" title="Click to Call">0729294100</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section typeof="sa:Important informations">
                <h2>Content</h2>
            </section>
            <div role="contentinfo">
        <ol role="directory">
            <li><a href="#introduction">Introduction</a>
                <ol role="introduction-directory">
                    <li><a href="#introduction__purpose">Purpose</a></li>
                    <li><a href="#introduction__audience">Intended Audience and Reading Suggestions</a></li>
                    <li><a href="#introduction__product-scope">Product Scope</a></li>
                    <li><a href="#introduction__references">References</a></li>
                </ol>
            </li>
            <li><a href="#overall-description">Overall Description</a>
             <ol role="#description-directory">
                <li><a href="#overall-description__product-perspective">Product Perspective</a></li>
                <li><a href="#overall-description__product-functions">Product Functions</a></li>
                <li><a href="#overall-description__operation-enviroment">Operating Environment</a></li>
                <li><a href="#overall-description__design-constraints">Design and Implementation Constraints</a></li>
                <li><a href="#overall-description__user-documentation">User Documentation</a></li>
             </ol>
            </li>
             <li><a href="#interfacereq">External Interface Requirements</a>
             <ol role="#interfacereq-directory">
                <li><a href="#interfacereq__user-interfaces">User Interfaces</a></li>
             </ol>
            </li>
            </li>
             <li><a href="#systemfeatures">System Features</a>
             <ol role="#systemfeatures-directory">
                <li><a href="#systemfeatures__hartainteractiva">Interactive Map</a></li>
                <li><a href="#systemfeatures__generarearapoartelor">Report Engendering</a></li>
             </ol>
            </li>
            </li>
             <li><a href="#nonfunctionalreq">Other Nonfunctional Requirements</a>
             <ol role="#nonfunctionalreq-directory">
                <li><a href="#nonfunctionalreq__security-requirements">Security requirements</a></li>
             </ol>
            </li>
        </ol>
    </div>
        </header>
        <section id="introduction" role="doc-introduction">
            <h2>1. Introduction</h2>
            <section id="introduction__purpose" role="doc-introduction">
                <h3>1.1 Purpose</h3>
                <p>The product described in this document is called GaMon (Garbage Web Monitor). GaMon is a Web application capable, based on its own REST / GraphQL API, to manage information on garbage collection, sorting and recycling - by categories: household, paper, plastic, etc.</p>
                    </section>
                    <section id="introduction__audience" role="doc-introduction">
                <h3>1.2 Intended Audience and Reading Suggestions</h3>
                <p>
                    <p>This document is for web developers, project managers, and Web application testers alike.</p>
                </p>
            </section>
            <section id="introduction__product-scope" role="doc-introduction">
                <h3>1.3 Product Scope</h3>
                <p>The application will provide support for users to report places where a substantial amount of garbage has accumulated, in order to decongest.
 Per unit of time (day, week, month), numerical and graphic reports will be generated - available in HTML, CSV and PDF formats - regarding the current situation at neighborhood / locality level, highlighting the cleanest / miserable areas.
 The system will also provide support for initiating awareness campaigns on the selective collection of garbage and the reporting of incidents aimed at improper storage.</p>
            </section>
            <section id="introduction__references" role="doc-introduction">
                <h3>1.4 References</h3>
                <p>
                    None
                </p>
            </section>
        </section>
        <section id="overall-description" role="doc-overall-description">
            <h2>2. Overall Description</h2>
            <section id="overall-description__product-perspective" role="doc-overall-description"> 
                <h3>2.1 Product Perspective</h3>
                <p>This product is innovative and represents a unique application on the market at the moment.</p>
            </section>
            <section id="overall-description__product-functions" role="doc-overall-description">
                <h3>2.2 Product Functions</h3>
                <p>The user will be able to report the places where a substantial amount of garbage has accumulated, in order to decongest. The user will be able to generate a numerical and graphical report, available in various formats, to observe the current situation at the neighborhood / locality level. He will also be able to see the cleanest / dirtiest areas.</p>
            </section>
            <section id="overall-description__operation-enviroment" role="doc-overall-description">
                <h3>2.3 Operating Environment</h3>
               <p>The product will be available on all versions of Windows, MacOs and Linux</p>
            </section>
            <section id="overall-description__design-constraints" role="doc-overall-description">
                <h3>2.4 Design and Implementation Constraints</h3>
                <p>
                <ul>
                    <li>Front-End:</li>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </ul>
                <ul>
                    <li>Back-End:</li>
                    <ul>
                        <li>Node.js</li>
                        <li>MySQL</li>
                    </ul>
                </ul>
                </p>
            </section>
            <section id="overall-description__user-documentation" role="doc-overall-description">
                <h3>2.5 User Documentation</h3>
                <p>
                   None
                </p>
            </section> 
        </section>
        <section id="interfacereq" role="interfacereq-description">
            <h2>3. External Interface Requirements</h2>
            <section id="interfacereq__user-interfaces" role="interfacereq-description">
                <h3>3.1 User Interfaces</h3>
              <p>When accessing the web application, the user is sent to its main page. From here, it is possible to
log in to the application or create an account if you don't already have one. It can also use the "About us" and "Contacts" buttons
later, information about the product or how to contact the administrators will be displayed.</p>
            </section>
        </section>
        <section id="systemfeatures" role="systemfeatures-description">
            <h2>4. System Features</h2>
            <section id="systemfeatures__hartainteractiva" role="systemfeatures-description">
           <h3>4.1 Interactive Map </h3>
        <p>The product gives the user the ability to view a map. On this map, the user has the option to use the 2 buttons displayed ("Report Trash", "Collection Points"). "Collection Points"
will highlight on the map, using a specific color, the collection centers in the area where it is located. When accessing a collection center on the map, you will be able to see both pictures and information about it.
"Report Trash" will allow him to report in real time the areas where a substantial amount of garbage has accumulated, in order to decongest, highlighting on the map the area reported with the help of markers. Also, in making the report, the user will be able to
upload images. The user will be able to access the respective markers and will be able to send an alert to all other users within the same range, to initiate awareness campaigns for residents regarding selective garbage collection and incident reporting for improper storage. made using the Google Maps API.</p>
            </section>
            <section id="systemfeatures__generarearapoartelor" role="systemfeatures-description">
        <h3>4.2 Report Engendering</h3>
        <p>The product will generate per unit time (day, week, month), numerical and graphical reports - available in HTML, CSV and PDF formats - regarding the current situation at the neighborhood / locality level, highlighting the cleanest / miserable areas.</p>
            </section>
        </section>
        <section id="nonfunctionalreq" role="nonfunctionalreq-description">
            <h2>5. Other Nonfunctional Requirements</h2>
            <section id="nonfunctionalreq__security-requirements" role="nonfunctionalreq-description">
                <h3>5.1 Security requirements</h3>
                <p>The application will implement protection systems, against cyber atacks like CSS (Cross Site Scripting) and SQL Injection</p>
            </section>
        </section>
    </article>
</body>
</html>
