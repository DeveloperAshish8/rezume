import React, { useState } from "react";
import {
  Text,
  Document,
  Page,
  View,
  PDFViewer,
  StyleSheet,
  Link,
  Font,
  Svg,
  Line,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const Rezume = ({ resume }) => {
  const [rezume, setRezume] = useState(resume);

  Font.register({
    family: "PTserif",
    fonts: [
      {
        src: "/fonts/PTSerif-Regular.ttf",
        fontWeight: 400,
      },
      {
        src: "/fonts/PTSerif-Bold.ttf",
        fontWeight: 700,
      },
      {
        src: "/fonts/PTSerif-Italic.ttf",
        fontWeight: "normal",
        fontStyle: "italic",
      },
    ],
  });
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      padding: "20px",
      fontFamily: "PTserif",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "15px",
    },
    name: {
      fontWeight: "700",
      fontSize: "25px",
    },
    headerArea: {
      fontSize: "10px",
    },
    link: {
      color: "black",
    },
    heading: {
      fontWeight: "400",
      fontSize: "13px",
      marginBottom: "2px",
    },
    sections: {
      marginLeft: "15px",
      marginRight: "15px",
    },
    section: {
      marginBottom: "5px",
    },
    innerHead: {
      padding: "2px 10px 1px 10px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    innerHead1: {
      fontSize: "10px",
      fontWeight: "800",
    },
    innerHead2: {
      fontSize: "10px",
      fontStyle: "italic",
    },
    point: {
      display: "flex",
      flexDirection: "row",
      fontSize: "9px",
      padding: "2px 20px",
      gap: "5px",
      alignContent: "left",
      width: "500px",
    },
    projectTitle: {
      display: "flex",
      flexDirection: "row",
    },
    skill: {
      display: "flex",
      flexDirection: "row",
      padding: "2px 10px 1px 10px",
    },
    pointsArea: {
      marginTop: "5px",
    },
    AcheivementPoint: {
      display: "flex",
      flexDirection: "row",
      fontSize: "10px",
      padding: "2px 10px 1px 10px",
      gap: "5px",
      alignContent: "left",
      width: "500px",
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>
            {rezume.personal.firstName + " " + rezume.personal.lastName}
          </Text>
          <Text style={styles.headerArea}>
            {rezume.personal.phone + " "}|{" " + rezume.personal.email + " "}
            {"|" + " "}
            <Link style={styles.link} src={rezume.personal.linkedin}>
              linkedin
            </Link>{" "}
            {"|" + " "}
            <Link style={styles.link} src={rezume.personal.github}>
              github
            </Link>
          </Text>
        </View>
        {/* Education Section */}
        <View style={styles.sections}>
          <Text style={styles.heading}>Education</Text>
          <Svg height="2" width="530">
            <Line
              x1="900"
              y1="0"
              x2="0"
              y2="0"
              strokeWidth={1}
              stroke="black"
            />
          </Svg>
          <View style={styles.section}>
            <View style={styles.innerHead}>
              <Text style={styles.innerHead1}>{rezume.education.college0}</Text>
              <Text style={styles.innerHead2}>
                {rezume.education.location0}
              </Text>
            </View>

            <View style={styles.innerHead}>
              <Text style={styles.innerHead2}>{rezume.education.title0}</Text>
              <Text style={styles.innerHead2}>
                {rezume.education.duration0}
              </Text>
            </View>
          </View>

          {rezume.education.college1?.length > 2 &&
            rezume.education.location1?.length > 2 &&
            rezume.education.title1?.length > 2 &&
            rezume.education.duration1?.length > 2 && (
              <View style={styles.section}>
                <View style={styles.innerHead}>
                  <Text style={styles.innerHead1}>
                    {rezume.education.college1}
                  </Text>
                  <Text style={styles.innerHead2}>
                    {rezume.education.location1}
                  </Text>
                </View>
                <View style={styles.innerHead}>
                  <Text style={styles.innerHead2}>
                    {rezume.education.title1}
                  </Text>
                  <Text style={styles.innerHead2}>
                    {rezume.education.duration1}
                  </Text>
                </View>
              </View>
            )}
        </View>
        {/* Experience section */}
        {rezume.experience.designation0?.length > 2 &&
          rezume.experience.duration0?.length > 2 &&
          rezume.experience.company0?.length > 2 &&
          rezume.experience.location0?.length > 2 && (
            <View style={styles.sections}>
              <Text style={styles.heading}>Experience</Text>
              <Svg height="2" width="530">
                <Line
                  x1="900"
                  y1="0"
                  x2="0"
                  y2="0"
                  strokeWidth={1}
                  stroke="black"
                />
              </Svg>
              <View style={styles.section}>
                <View style={styles.innerHead}>
                  <Text style={styles.innerHead1}>
                    {rezume.experience.designation0}
                  </Text>
                  <Text style={styles.innerHead2}>
                    {rezume.experience.duration0}
                  </Text>
                </View>
                <View style={styles.innerHead}>
                  <Text style={styles.innerHead2}>
                    {rezume.experience.company0}
                  </Text>
                  <Text style={styles.innerHead2}>
                    {rezume.experience.location0}
                  </Text>
                </View>
                <View style={styles.points}>
                  <View style={styles.point}>
                    <Text>•</Text>
                    <Text>{rezume.experience.Ex0details1}</Text>
                  </View>
                  <View style={styles.point}>
                    <Text>•</Text>
                    <Text>{rezume.experience.Ex0details2}</Text>
                  </View>
                  <View style={styles.point}>
                    <Text>•</Text>
                    <Text>{rezume.experience.Ex0details3}</Text>
                  </View>
                </View>
              </View>

              {rezume.experience.designation1?.length > 2 &&
                rezume.experience.duration1?.length > 2 &&
                rezume.experience.company1?.length > 2 &&
                rezume.experience.location1?.length > 2 && (
                  <View style={styles.section}>
                    <View style={styles.innerHead}>
                      <Text style={styles.innerHead1}>
                        {rezume.experience.designation1}
                      </Text>
                      <Text style={styles.innerHead2}>
                        {rezume.experience.duration1}
                      </Text>
                    </View>
                    <View style={styles.innerHead}>
                      <Text style={styles.innerHead2}>
                        {rezume.experience.company1}
                      </Text>
                      <Text style={styles.innerHead2}>
                        {rezume.experience.location1}
                      </Text>
                    </View>
                    <View style={styles.points}>
                      <View style={styles.point}>
                        <Text>•</Text>
                        <Text>{rezume.experience.Ex1details1}</Text>
                      </View>
                      <View style={styles.point}>
                        <Text>•</Text>
                        <Text>{rezume.experience.Ex1details2}</Text>
                      </View>
                      <View style={styles.point}>
                        <Text>•</Text>
                        <Text>{rezume.experience.Ex1details3}</Text>
                      </View>
                    </View>
                  </View>
                )}
            </View>
          )}
        {/* Projects Section */}
        <View style={styles.sections}>
          <Text style={styles.heading}>Projects</Text>
          <Svg height="2" width="530">
            <Line
              x1="900"
              y1="0"
              x2="0"
              y2="0"
              strokeWidth={1}
              stroke="black"
            />
          </Svg>
          <View style={styles.section}>
            <View style={styles.innerHead}>
              <View style={styles.projectTitle}>
                <Text style={styles.innerHead1}>
                  {rezume.project.title0 + "  "}
                </Text>
                <Text style={styles.innerHead2}>
                  {"|" + "  "}
                  {rezume.project.techStacks0 + "  "}
                </Text>
                <Text style={styles.innerHead2}>
                  {"|" + "  "}
                  {rezume.project.githubLink0 && (
                    <Link style={styles.link} src={rezume.project.githubLink0}>
                      Source Code
                    </Link>
                  )}
                </Text>
              </View>
              <Text style={styles.innerHead2}>
                {rezume.project.deployedLink0 && (
                  <Link style={styles.link} src={rezume.project.deployedLink0}>
                    Deployed Link
                  </Link>
                )}
              </Text>
            </View>

            <View style={styles.points}>
              <View style={styles.point}>
                <Text>•</Text>
                <Text>{rezume.project.P0details1}</Text>
              </View>
              <View style={styles.point}>
                <Text>•</Text>
                <Text>{rezume.project.P0details2}</Text>
              </View>
              <View style={styles.point}>
                <Text>•</Text>
                <Text>{rezume.project.P0details3}</Text>
              </View>
            </View>
          </View>

          {rezume.project.title1?.length > 2 &&
            rezume.project.techStacks1?.length > 2 && (
              <View style={styles.section}>
                <View style={styles.innerHead}>
                  <View style={styles.projectTitle}>
                    <Text style={styles.innerHead1}>
                      {rezume.project.title1 + "  "}
                    </Text>
                    <Text style={styles.innerHead2}>
                      {"|" + "  "}
                      {rezume.project.techStacks1 + "  "}
                    </Text>
                    <Text style={styles.innerHead2}>
                      {"|" + "  "}
                      {rezume.project.githubLink1 && (
                        <Link
                          style={styles.link}
                          src={rezume.project.githubLink1}
                        >
                          Source Code
                        </Link>
                      )}
                    </Text>
                  </View>
                  <Text style={styles.innerHead2}>
                    {rezume.project.deployedLink1 && (
                      <Link
                        style={styles.link}
                        src={rezume.project.deployedLink1}
                      >
                        Deployed Link
                      </Link>
                    )}
                  </Text>
                </View>

                <View style={styles.points}>
                  <View style={styles.point}>
                    <Text>•</Text>
                    <Text>{rezume.project.P1details1}</Text>
                  </View>
                  <View style={styles.point}>
                    <Text>•</Text>
                    <Text>{rezume.project.P1details2}</Text>
                  </View>
                  {rezume.project.P1details3?.length > 2 && (
                    <View style={styles.point}>
                      <Text>•</Text>
                      <Text>{rezume.project.P1details3}</Text>
                    </View>
                  )}
                </View>
              </View>
            )}
        </View>
        {/* skills Section */}
        <View style={styles.sections}>
          <Text style={styles.heading}>Technical Skills</Text>
          <Svg height="2" width="530">
            <Line
              x1="900"
              y1="0"
              x2="0"
              y2="0"
              strokeWidth={1}
              stroke="black"
            />
          </Svg>
          <View style={styles.section}>
            <View style={styles.skill}>
              <Text style={styles.innerHead1}>Languages: </Text>
              <Text style={styles.innerHead2}>{rezume.skills.languages}</Text>
            </View>
            <View style={styles.skill}>
              <Text style={styles.innerHead1}>Frameworks: </Text>
              <Text style={styles.innerHead2}>{rezume.skills.frameworks}</Text>
            </View>
            <View style={styles.skill}>
              <Text style={styles.innerHead1}>Tools: </Text>
              <Text style={styles.innerHead2}>{rezume.skills.tools}</Text>
            </View>
            <View style={styles.skill}>
              <Text style={styles.innerHead1}>Database: </Text>
              <Text style={styles.innerHead2}>{rezume.skills.database}</Text>
            </View>
          </View>
        </View>
        {/* Acheivements Section */}
        {rezume.acheivement.acheivement1?.length > 2 && (
          <View style={styles.sections}>
            <Text style={styles.heading}>Acheivements</Text>
            <Svg height="2" width="530">
              <Line
                x1="900"
                y1="0"
                x2="0"
                y2="0"
                strokeWidth={1}
                stroke="black"
              />
            </Svg>
            <View style={styles.section}>
              <View style={styles.pointsArea}>
                <View style={styles.AcheivementPoint}>
                  <Text>•</Text>
                  <Text>{rezume.acheivement.acheivement1}</Text>
                </View>
                {rezume.acheivement.acheivement2?.length > 2 && (
                  <View style={styles.AcheivementPoint}>
                    <Text>•</Text>
                    <Text>{rezume.acheivement.acheivement2}</Text>
                  </View>
                )}
                {rezume.acheivement.acheivement3?.length > 2 && (
                  <View style={styles.AcheivementPoint}>
                    <Text>•</Text>
                    <Text>{rezume.acheivement.acheivement3}</Text>
                  </View>
                )}
                {rezume.acheivement.acheivement4?.length > 2 && (
                  <View style={styles.AcheivementPoint}>
                    <Text>•</Text>
                    <Text>{rezume.acheivement.acheivement4}</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        )}
        {!rezume.experience.designation0 &&
          !rezume.experience.company0 &&
          rezume.leadership.position0?.length > 2 &&
          rezume.leadership.organisation0?.length > 2 &&
          rezume.leadership.location0?.length > 2 && (
            <View style={styles.sections}>
              <Text style={styles.heading}>Position of Responsibility</Text>
              <Svg height="2" width="530">
                <Line
                  x1="900"
                  y1="0"
                  x2="0"
                  y2="0"
                  strokeWidth={1}
                  stroke="black"
                />
              </Svg>
              <View style={styles.section}>
                <View style={styles.innerHead}>
                  <Text style={styles.innerHead1}>
                    {rezume.leadership.position0}
                  </Text>
                  <Text style={styles.innerHead2}>
                    {rezume.leadership.duration0}
                  </Text>
                </View>
                <View style={styles.innerHead}>
                  <Text style={styles.innerHead2}>
                    {rezume.leadership.organisation0}
                  </Text>
                  <Text style={styles.innerHead2}>
                    {rezume.leadership.location0}
                  </Text>
                </View>
                <View style={styles.points}>
                  <View style={styles.point}>
                    <Text>•</Text>
                    <Text>{rezume.leadership.Ex0details1}</Text>
                  </View>
                  <View style={styles.point}>
                    <Text>•</Text>
                    <Text>{rezume.leadership.Ex0details2}</Text>
                  </View>
                  <View style={styles.point}>
                    <Text>•</Text>
                    <Text>{rezume.leadership.Ex0details3}</Text>
                  </View>
                </View>
              </View>

              {rezume.leadership.position1?.length > 2 &&
                rezume.leadership.position1?.length > 2 &&
                rezume.leadership.organisation1?.length > 2 &&
                rezume.leadership.location1?.length > 2 && (
                  <View style={styles.section}>
                    <View style={styles.innerHead}>
                      <Text style={styles.innerHead1}>
                        {rezume.leadership.position1}
                      </Text>
                      <Text style={styles.innerHead2}>
                        {rezume.leadership.duration1}
                      </Text>
                    </View>
                    <View style={styles.innerHead}>
                      <Text style={styles.innerHead2}>
                        {rezume.leadership.organisation1}
                      </Text>
                      <Text style={styles.innerHead2}>
                        {rezume.leadership.location1}
                      </Text>
                    </View>
                    <View style={styles.points}>
                      <View style={styles.point}>
                        <Text>•</Text>
                        <Text>{rezume.leadership.Ex1details1}</Text>
                      </View>
                      <View style={styles.point}>
                        <Text>•</Text>
                        <Text>{rezume.leadership.Ex1details2}</Text>
                      </View>
                      <View style={styles.point}>
                        <Text>•</Text>
                        <Text>{rezume.leadership.Ex1details3}</Text>
                      </View>
                    </View>
                  </View>
                )}
            </View>
          )}
      </Page>
    </Document>
  );
};

export default Rezume;
