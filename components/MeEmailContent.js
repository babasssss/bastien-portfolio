// Notification personnel
import React from 'react'

const MeEmailContent = ({ name, email, objet, message }) => {
  return (
    <>
      <title />
      <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      {/*[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]*/}
      {/*[if !mso]><!*/}
      <link
        href="https://fonts.googleapis.com/css?family=Permanent+Marker"
        rel="stylesheet"
        type="text/css"
      />
      {/*<![endif]*/}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t* {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\n\t\tbody {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\n\t\ta[x-apple-data-detectors] {\n\t\t\tcolor: inherit !important;\n\t\t\ttext-decoration: inherit !important;\n\t\t}\n\n\t\t#MessageViewBody a {\n\t\t\tcolor: inherit;\n\t\t\ttext-decoration: none;\n\t\t}\n\n\t\tp {\n\t\t\tline-height: inherit\n\t\t}\n\n\t\t.desktop_hide,\n\t\t.desktop_hide table {\n\t\t\tmso-hide: all;\n\t\t\tdisplay: none;\n\t\t\tmax-height: 0px;\n\t\t\toverflow: hidden;\n\t\t}\n\n\t\t.image_block img+div {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t@media (max-width:520px) {\n\n\t\t\t.desktop_hide table.icons-inner,\n\t\t\t.social_block.desktop_hide .social-table {\n\t\t\t\tdisplay: inline-block !important;\n\t\t\t}\n\n\t\t\t.icons-inner {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t.icons-inner td {\n\t\t\t\tmargin: 0 auto;\n\t\t\t}\n\n\t\t\t.mobile_hide {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.row-content {\n\t\t\t\twidth: 100% !important;\n\t\t\t}\n\n\t\t\t.stack .column {\n\t\t\t\twidth: 100%;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\n\t\t\t.mobile_hide {\n\t\t\t\tmin-height: 0;\n\t\t\t\tmax-height: 0;\n\t\t\t\tmax-width: 0;\n\t\t\t\toverflow: hidden;\n\t\t\t\tfont-size: 0px;\n\t\t\t}\n\n\t\t\t.desktop_hide,\n\t\t\t.desktop_hide table {\n\t\t\t\tdisplay: table !important;\n\t\t\t\tmax-height: none !important;\n\t\t\t}\n\t\t}\n\t"
        }}
      />
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        className="nl-container"
        role="presentation"
        style={{
          msoTableLspace: "0pt",
          msoTableRspace: "0pt",
          backgroundColor: "#fff"
        }}
        width="100%"
      >
        <tbody>
          <tr>
            <td>
              <table
                align="center"
                border={0}
                cellPadding={0}
                cellSpacing={0}
                className="row row-1"
                role="presentation"
                style={{ msoTableLspace: "0pt", msoTableRspace: "0pt" }}
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        className="row-content stack"
                        role="presentation"
                        style={{
                          msoTableLspace: "0pt",
                          msoTableRspace: "0pt",
                          color: "#000",
                          width: 500,
                          margin: "0 auto"
                        }}
                        width={500}
                      >
                        <tbody>
                          <tr>
                            <td
                              className="column column-1"
                              style={{
                                textAlign: "left",
                                msoTableLspace: "0pt",
                                msoTableRspace: "0pt",
                                fontWeight: 400,
                                paddingBottom: 5,
                                paddingTop: 5,
                                verticalAlign: "top",
                                borderTop: 0,
                                borderRight: 0,
                                borderBottom: 0,
                                borderLeft: 0
                              }}
                              width="100%"
                            >
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className="image_block block-1"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="pad" style={{ width: "100%" }}>
                                      <div
                                        align="center"
                                        className="alignment"
                                        style={{ lineHeight: 10 }}
                                      >
                                        <img
                                          alt="Image"
                                          src="https://soreau.dev/_next/image?url=%2Flogo.png&w=1920&q=75"
                                          style={{
                                            display: "block",
                                            height: "auto",
                                            border: 0,
                                            maxWidth: 500,
                                            width: "100%"
                                          }}
                                          title="Image"
                                          width={500}
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className="image_block block-2"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="pad" style={{ width: "100%" }}>
                                      <div
                                        align="center"
                                        className="alignment"
                                        style={{ lineHeight: 10 }}
                                      >
                                        <img
                                          alt="Image"
                                          src="https://soreau.dev/_next/image?url=%2Fanimated-soreau.gif&w=1920&q=75"
                                          style={{
                                            display: "block",
                                            height: "auto",
                                            border: 0,
                                            maxWidth: 500,
                                            width: "100%"
                                          }}
                                          title="Image"
                                          width={500}
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border={0}
                cellPadding={0}
                cellSpacing={0}
                className="row row-2"
                role="presentation"
                style={{ msoTableLspace: "0pt", msoTableRspace: "0pt" }}
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        className="row-content stack"
                        role="presentation"
                        style={{
                          msoTableLspace: "0pt",
                          msoTableRspace: "0pt",
                          color: "#000",
                          width: 500,
                          margin: "0 auto"
                        }}
                        width={500}
                      >
                        <tbody>
                          <tr>
                            <td
                              className="column column-1"
                              style={{
                                textAlign: "left",
                                msoTableLspace: "0pt",
                                msoTableRspace: "0pt",
                                fontWeight: 400,
                                paddingBottom: 5,
                                paddingTop: 5,
                                verticalAlign: "top",
                                borderTop: 0,
                                borderRight: 0,
                                borderBottom: 0,
                                borderLeft: 0
                              }}
                              width="33.333333333333336%"
                            >
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className="image_block block-1 mobile_hide"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="pad" style={{ width: "100%" }}>
                                      <div
                                        align="center"
                                        className="alignment"
                                        style={{ lineHeight: 10 }}
                                      >
                                        <img
                                          alt="Image"
                                          src="https://soreau.dev/_next/image?url=%2Farrow-soreau.gif&w=1920&q=75"
                                          style={{
                                            display: "block",
                                            height: "auto",
                                            border: 0,
                                            maxWidth: 138,
                                            width: "100%"
                                          }}
                                          title="Image"
                                          width={138}
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td
                              className="column column-2"
                              style={{
                                textAlign: "left",
                                msoTableLspace: "0pt",
                                msoTableRspace: "0pt",
                                fontWeight: 400,
                                paddingBottom: 5,
                                paddingTop: 5,
                                verticalAlign: "top",
                                borderTop: 0,
                                borderRight: 0,
                                borderBottom: 0,
                                borderLeft: 0
                              }}
                              width="33.333333333333336%"
                            >
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className="paragraph_block block-1"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt",
                                  wordBreak: "break-word"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="pad"
                                      style={{
                                        paddingBottom: 5,
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        paddingTop: 20
                                      }}
                                    >
                                      <div
                                        style={{
                                          color: "#555555",
                                          fontFamily:
                                            '"Permanent Marker",Impact,Charcoal,sans-serif',
                                          fontSize: 26,
                                          letterSpacing: 4,
                                          lineHeight: "200%",
                                          textAlign: "center",
                                          msoLineHeightAlt: 52
                                        }}
                                      >
                                        <p
                                          style={{
                                            margin: 0,
                                            wordBreak: "break-word"
                                          }}
                                        >
                                          <span style={{ color: "#000000" }}>
                                            <strong>NEW CONTACT</strong>
                                          </span>
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td
                              className="column column-3"
                              style={{
                                textAlign: "left",
                                msoTableLspace: "0pt",
                                msoTableRspace: "0pt",
                                fontWeight: 400,
                                paddingBottom: 5,
                                paddingTop: 5,
                                verticalAlign: "top",
                                borderTop: 0,
                                borderRight: 0,
                                borderBottom: 0,
                                borderLeft: 0
                              }}
                              width="33.333333333333336%"
                            >
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className="image_block block-1"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="pad" style={{ width: "100%" }}>
                                      <div
                                        align="center"
                                        className="alignment"
                                        style={{ lineHeight: 10 }}
                                      >
                                        <img
                                          alt="Image"
                                          src="https://soreau.dev/_next/image?url=%2Farrow-soreau.gif&w=1920&q=75"
                                          style={{
                                            display: "block",
                                            height: "auto",
                                            border: 0,
                                            maxWidth: 138,
                                            width: "100%"
                                          }}
                                          title="Image"
                                          width={138}
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border={0}
                cellPadding={0}
                cellSpacing={0}
                className="row row-3"
                role="presentation"
                style={{ msoTableLspace: "0pt", msoTableRspace: "0pt" }}
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        className="row-content stack"
                        role="presentation"
                        style={{
                          msoTableLspace: "0pt",
                          msoTableRspace: "0pt",
                          borderRadius: 0,
                          color: "#000",
                          width: 500,
                          margin: "0 auto"
                        }}
                        width={500}
                      >
                        <tbody>
                          <tr>
                            <td
                              className="column column-1"
                              style={{
                                textAlign: "left",
                                msoTableLspace: "0pt",
                                msoTableRspace: "0pt",
                                fontWeight: 400,
                                paddingBottom: 5,
                                paddingTop: 5,
                                verticalAlign: "top",
                                borderTop: 0,
                                borderRight: 0,
                                borderBottom: 0,
                                borderLeft: 0
                              }}
                              width="33.333333333333336%"
                            >
                              <table
                                border={0}
                                cellPadding={10}
                                cellSpacing={0}
                                className="paragraph_block block-1"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt",
                                  wordBreak: "break-word"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="pad">
                                      <div
                                        style={{
                                          color: "#000000",
                                          fontFamily:
                                            '"Permanent Marker",Impact,Charcoal,sans-serif',
                                          fontSize: 23,
                                          letterSpacing: 4,
                                          lineHeight: "120%",
                                          textAlign: "center",
                                          msoLineHeightAlt: "27.599999999999998px"
                                        }}
                                      >
                                        <p
                                          style={{
                                            margin: 0,
                                            wordBreak: "break-word"
                                          }}
                                        >
                                          <span>
                                            <strong>Nom</strong>
                                          </span>
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border={0}
                                cellPadding={10}
                                cellSpacing={0}
                                className="paragraph_block block-2"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt",
                                  wordBreak: "break-word"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="pad">
                                      <div
                                        style={{
                                          color: "#555555",
                                          fontFamily:
                                            'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                          fontSize: 14,
                                          letterSpacing: 2,
                                          lineHeight: "120%",
                                          textAlign: "center",
                                          msoLineHeightAlt: "16.8px"
                                        }}
                                      >
                                        <p
                                          style={{
                                            margin: 0,
                                            wordBreak: "break-word"
                                          }}
                                        >
                                          {name}
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td
                              className="column column-2"
                              style={{
                                textAlign: "left",
                                msoTableLspace: "0pt",
                                msoTableRspace: "0pt",
                                fontWeight: 400,
                                paddingBottom: 5,
                                paddingTop: 5,
                                verticalAlign: "top",
                                borderTop: 0,
                                borderRight: 0,
                                borderBottom: 0,
                                borderLeft: 0
                              }}
                              width="33.333333333333336%"
                            >
                              <table
                                border={0}
                                cellPadding={10}
                                cellSpacing={0}
                                className="paragraph_block block-1"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt",
                                  wordBreak: "break-word"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="pad">
                                      <div
                                        style={{
                                          color: "#000000",
                                          fontFamily:
                                            '"Permanent Marker",Impact,Charcoal,sans-serif',
                                          fontSize: 23,
                                          letterSpacing: 4,
                                          lineHeight: "120%",
                                          textAlign: "center",
                                          msoLineHeightAlt: "27.599999999999998px"
                                        }}
                                      >
                                        <p
                                          style={{
                                            margin: 0,
                                            wordBreak: "break-word"
                                          }}
                                        >
                                          <span>
                                            <strong>Email</strong>
                                          </span>
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border={0}
                                cellPadding={10}
                                cellSpacing={0}
                                className="paragraph_block block-2"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt",
                                  wordBreak: "break-word"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="pad">
                                      <div
                                        style={{
                                          color: "#555555",
                                          fontFamily:
                                            'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                          fontSize: 14,
                                          letterSpacing: 2,
                                          lineHeight: "120%",
                                          textAlign: "center",
                                          msoLineHeightAlt: "16.8px"
                                        }}
                                      >
                                        <p
                                          style={{
                                            margin: 0,
                                            wordBreak: "break-word"
                                          }}
                                        >
                                          {email}
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td
                              className="column column-3"
                              style={{
                                textAlign: "left",
                                msoTableLspace: "0pt",
                                msoTableRspace: "0pt",
                                fontWeight: 400,
                                paddingBottom: 5,
                                paddingTop: 5,
                                verticalAlign: "top",
                                borderTop: 0,
                                borderRight: 0,
                                borderBottom: 0,
                                borderLeft: 0
                              }}
                              width="33.333333333333336%"
                            >
                              <table
                                border={0}
                                cellPadding={10}
                                cellSpacing={0}
                                className="paragraph_block block-1"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt",
                                  wordBreak: "break-word"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="pad">
                                      <div
                                        style={{
                                          color: "#000000",
                                          fontFamily:
                                            '"Permanent Marker",Impact,Charcoal,sans-serif',
                                          fontSize: 23,
                                          letterSpacing: 4,
                                          lineHeight: "120%",
                                          textAlign: "center",
                                          msoLineHeightAlt: "27.599999999999998px"
                                        }}
                                      >
                                        <p
                                          style={{
                                            margin: 0,
                                            wordBreak: "break-word"
                                          }}
                                        >
                                          <span>
                                            <strong>Objet</strong>
                                          </span>
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border={0}
                                cellPadding={10}
                                cellSpacing={0}
                                className="paragraph_block block-2"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt",
                                  wordBreak: "break-word"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="pad">
                                      <div
                                        style={{
                                          color: "#555555",
                                          fontFamily:
                                            'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                          fontSize: 14,
                                          letterSpacing: 2,
                                          lineHeight: "120%",
                                          textAlign: "center",
                                          msoLineHeightAlt: "16.8px"
                                        }}
                                      >
                                        <p
                                          style={{
                                            margin: 0,
                                            wordBreak: "break-word"
                                          }}
                                        >
                                          {objet}
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border={0}
                cellPadding={0}
                cellSpacing={0}
                className="row row-4"
                role="presentation"
                style={{ msoTableLspace: "0pt", msoTableRspace: "0pt" }}
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        className="row-content stack"
                        role="presentation"
                        style={{
                          msoTableLspace: "0pt",
                          msoTableRspace: "0pt",
                          borderRadius: 0,
                          color: "#000",
                          width: 500,
                          margin: "0 auto"
                        }}
                        width={500}
                      >
                        <tbody>
                          <tr>
                            <td
                              className="column column-1"
                              style={{
                                textAlign: "left",
                                msoTableLspace: "0pt",
                                msoTableRspace: "0pt",
                                fontWeight: 400,
                                paddingBottom: 5,
                                paddingTop: 5,
                                verticalAlign: "top",
                                borderTop: 0,
                                borderRight: 0,
                                borderBottom: 0,
                                borderLeft: 0
                              }}
                              width="100%"
                            >
                              <table
                                border={0}
                                cellPadding={10}
                                cellSpacing={0}
                                className="paragraph_block block-1"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt",
                                  wordBreak: "break-word"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="pad">
                                      <div
                                        style={{
                                          color: "#000000",
                                          fontFamily:
                                            '"Permanent Marker",Impact,Charcoal,sans-serif',
                                          fontSize: 23,
                                          letterSpacing: 4,
                                          lineHeight: "120%",
                                          textAlign: "center",
                                          msoLineHeightAlt: "27.599999999999998px"
                                        }}
                                      >
                                        <p
                                          style={{
                                            margin: 0,
                                            wordBreak: "break-word"
                                          }}
                                        >
                                          <span>
                                            <strong>Message</strong>
                                          </span>
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border={0}
                                cellPadding={10}
                                cellSpacing={0}
                                className="paragraph_block block-2"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt",
                                  wordBreak: "break-word"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="pad">
                                      <div
                                        style={{
                                          color: "#555555",
                                          fontFamily:
                                            'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                          fontSize: 14,
                                          letterSpacing: 2,
                                          lineHeight: "120%",
                                          textAlign: "center",
                                          msoLineHeightAlt: "16.8px"
                                        }}
                                      >
                                        <p
                                          style={{
                                            margin: 0,
                                            wordBreak: "break-word"
                                          }}
                                        >
                                          {message}
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className="image_block block-3"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="pad" style={{ width: "100%" }}>
                                      <div
                                        align="center"
                                        className="alignment"
                                        style={{ lineHeight: 10 }}
                                      >
                                        <img
                                          alt="Image"
                                          src="https://soreau.dev/_next/image?url=%2Fanimated-soreau.gif&w=1920&q=75"
                                          style={{
                                            display: "block",
                                            height: "auto",
                                            border: 0,
                                            maxWidth: 500,
                                            width: "100%"
                                          }}
                                          title="Image"
                                          width={500}
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border={0}
                cellPadding={0}
                cellSpacing={0}
                className="row row-5"
                role="presentation"
                style={{
                  msoTableLspace: "0pt",
                  msoTableRspace: "0pt",
                  backgroundColor: "#000000"
                }}
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        className="row-content stack"
                        role="presentation"
                        style={{
                          msoTableLspace: "0pt",
                          msoTableRspace: "0pt",
                          color: "#000",
                          width: 500,
                          margin: "0 auto"
                        }}
                        width={500}
                      >
                        <tbody>
                          <tr>
                            <td
                              className="column column-1"
                              style={{
                                textAlign: "left",
                                msoTableLspace: "0pt",
                                msoTableRspace: "0pt",
                                fontWeight: 400,
                                paddingBottom: 20,
                                paddingTop: 5,
                                verticalAlign: "top",
                                borderTop: 0,
                                borderRight: 0,
                                borderBottom: 0,
                                borderLeft: 0
                              }}
                              width="50%"
                            >
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className="paragraph_block block-1"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt",
                                  wordBreak: "break-word"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="pad"
                                      style={{
                                        paddingBottom: 10,
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        paddingTop: 20
                                      }}
                                    >
                                      <div
                                        style={{
                                          color: "#ffffff",
                                          fontFamily:
                                            '"Permanent Marker",Impact,Charcoal,sans-serif',
                                          fontSize: 18,
                                          lineHeight: "120%",
                                          textAlign: "left",
                                          msoLineHeightAlt: "21.599999999999998px"
                                        }}
                                      >
                                        <p
                                          style={{
                                            margin: 0,
                                            wordBreak: "break-word"
                                          }}
                                        >
                                          <strong>
                                            <span style={{ color: "#ffffff" }}>
                                              SOREAU Bastien
                                            </span>
                                          </strong>
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className="social_block block-2"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="pad"
                                      style={{
                                        textAlign: "left",
                                        paddingRight: 0,
                                        paddingLeft: 0
                                      }}
                                    >
                                      <div align="left" className="alignment">
                                        <table
                                          border={0}
                                          cellPadding={0}
                                          cellSpacing={0}
                                          className="social-table"
                                          role="presentation"
                                          style={{
                                            msoTableLspace: "0pt",
                                            msoTableRspace: "0pt",
                                            display: "inline-block"
                                          }}
                                          width="141px"
                                        >
                                          <tbody>
                                            <tr>
                                              <td style={{ padding: "0 15px 0 0" }}>
                                                <a
                                                  href="https://www.facebook.com/bastien.soreau"
                                                  target="_blank"
                                                >
                                                  <img
                                                    alt="SOREAU Bastien"
                                                    height={32}
                                                    src="https://soreau.dev/_next/image?url=%2Ffacebook.png&w=1920&q=75"
                                                    style={{
                                                      display: "block",
                                                      height: "auto",
                                                      border: 0
                                                    }}
                                                    title="SOREAU Bastien"
                                                    width={32}
                                                  />
                                                </a>
                                              </td>
                                              <td style={{ padding: "0 15px 0 0" }}>
                                                <a
                                                  href="https://www.instagram.com/bastiensoreau/"
                                                  target="_blank"
                                                >
                                                  <img
                                                    alt="SOREAU Bastien"
                                                    height={32}
                                                    src="https://soreau.dev/_next/image?url=%2Finstagram.png&w=1920&q=75"
                                                    style={{
                                                      display: "block",
                                                      height: "auto",
                                                      border: 0
                                                    }}
                                                    title="SOREAU Bastien"
                                                    width={32}
                                                  />
                                                </a>
                                              </td>
                                              <td style={{ padding: "0 15px 0 0" }}>
                                                <a
                                                  href="https://www.youtube.com/@bastiensoreau6156"
                                                  target="_blank"
                                                >
                                                  <img
                                                    alt="SOREAU Bastien"
                                                    height={32}
                                                    src="https://soreau.dev/_next/image?url=%2Fyoutube.png&w=1920&q=75"
                                                    style={{
                                                      display: "block",
                                                      height: "auto",
                                                      border: 0
                                                    }}
                                                    title="SOREAU Bastien"
                                                    width={32}
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td
                              className="column column-2"
                              style={{
                                textAlign: "left",
                                msoTableLspace: "0pt",
                                msoTableRspace: "0pt",
                                fontWeight: 400,
                                paddingBottom: 5,
                                paddingTop: 5,
                                verticalAlign: "top",
                                borderTop: 0,
                                borderRight: 0,
                                borderBottom: 0,
                                borderLeft: 0
                              }}
                              width="50%"
                            >
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className="paragraph_block block-1"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt",
                                  wordBreak: "break-word"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="pad"
                                      style={{
                                        paddingBottom: 10,
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        paddingTop: 20
                                      }}
                                    >
                                      <div
                                        style={{
                                          color: "#ffffff",
                                          fontFamily:
                                            '"Permanent Marker",Impact,Charcoal,sans-serif',
                                          fontSize: 18,
                                          letterSpacing: 4,
                                          lineHeight: "150%",
                                          textAlign: "left",
                                          msoLineHeightAlt: 27
                                        }}
                                      >
                                        <p
                                          style={{
                                            margin: 0,
                                            wordBreak: "break-word"
                                          }}
                                        >
                                          <strong>
                                            <span style={{ color: "#ffffff" }}>
                                              NEW CONTACT&nbsp;
                                            </span>
                                          </strong>
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border={0}
                                cellPadding={10}
                                cellSpacing={0}
                                className="paragraph_block block-2"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt",
                                  wordBreak: "break-word"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td className="pad">
                                      <div
                                        style={{
                                          color: "#C0C0C0",
                                          fontFamily:
                                            'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                          fontSize: 12,
                                          lineHeight: "120%",
                                          textAlign: "left",
                                          msoLineHeightAlt: "14.399999999999999px"
                                        }}
                                      >
                                        <p style={{ margin: 0 }}>
                                          Tous les droits réservés © 2023
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border={0}
                cellPadding={0}
                cellSpacing={0}
                className="row row-6"
                role="presentation"
                style={{
                  msoTableLspace: "0pt",
                  msoTableRspace: "0pt",
                  backgroundColor: "#ffffff"
                }}
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        className="row-content stack"
                        role="presentation"
                        style={{
                          msoTableLspace: "0pt",
                          msoTableRspace: "0pt",
                          backgroundColor: "#fff",
                          color: "#000",
                          width: 500,
                          margin: "0 auto"
                        }}
                        width={500}
                      >
                        <tbody>
                          <tr>
                            <td
                              className="column column-1"
                              style={{
                                textAlign: "left",
                                msoTableLspace: "0pt",
                                msoTableRspace: "0pt",
                                fontWeight: 400,
                                paddingBottom: 5,
                                paddingTop: 5,
                                verticalAlign: "top",
                                borderTop: 0,
                                borderRight: 0,
                                borderBottom: 0,
                                borderLeft: 0
                              }}
                              width="100%"
                            >
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className="icons_block block-1"
                                role="presentation"
                                style={{
                                  msoTableLspace: "0pt",
                                  msoTableRspace: "0pt"
                                }}
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="pad"
                                      style={{
                                        verticalAlign: "middle",
                                        color: "#1e0e4b",
                                        fontFamily: '"Inter", sans-serif',
                                        fontSize: 15,
                                        paddingBottom: 5,
                                        paddingTop: 5,
                                        textAlign: "center"
                                      }}
                                    >
                                      <table
                                        cellPadding={0}
                                        cellSpacing={0}
                                        role="presentation"
                                        style={{
                                          msoTableLspace: "0pt",
                                          msoTableRspace: "0pt"
                                        }}
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              className="alignment"
                                              style={{
                                                verticalAlign: "middle",
                                                textAlign: "center"
                                              }}
                                            >
                                              {/*[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]*/}
                                              {/*[if !vml]><!*/}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      {/* End */}
    </>

  )
}

export default MeEmailContent
