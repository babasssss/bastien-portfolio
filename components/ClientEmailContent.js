import React from 'react'

const ClientEmailContent = ({ name, email, objet, message }) => {('')
  const annee = new Date().getFullYear()
  const jour = `${new Date().getDate()} ${new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(new Date())} ${new Date().getFullYear()} ${new Date().toLocaleTimeString()}`

  return (
    <>
      <title />
      <meta content='text/html; charset=utf-8' httpEquiv='Content-Type' />
      <meta content='width=device-width, initial-scale=1.0' name='viewport' />
      {/* [if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif] */}
      {/* [if !mso]><! */}
      {/* <![endif] */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n\t\t* {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\n\t\tbody {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\n\t\ta[x-apple-data-detectors] {\n\t\t\tcolor: inherit !important;\n\t\t\ttext-decoration: inherit !important;\n\t\t}\n\n\t\t#MessageViewBody a {\n\t\t\tcolor: inherit;\n\t\t\ttext-decoration: none;\n\t\t}\n\n\t\tp {\n\t\t\tline-height: inherit\n\t\t}\n\n\t\t.desktop_hide,\n\t\t.desktop_hide table {\n\t\t\tmso-hide: all;\n\t\t\tdisplay: none;\n\t\t\tmax-height: 0px;\n\t\t\toverflow: hidden;\n\t\t}\n\n\t\t.image_block img+div {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t@media (max-width:660px) {\n\n\t\t\t.desktop_hide table.icons-inner,\n\t\t\t.social_block.desktop_hide .social-table {\n\t\t\t\tdisplay: inline-block !important;\n\t\t\t}\n\n\t\t\t.icons-inner {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t.icons-inner td {\n\t\t\t\tmargin: 0 auto;\n\t\t\t}\n\n\t\t\t.mobile_hide {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.row-content {\n\t\t\t\twidth: 100% !important;\n\t\t\t}\n\n\t\t\t.stack .column {\n\t\t\t\twidth: 100%;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\n\t\t\t.mobile_hide {\n\t\t\t\tmin-height: 0;\n\t\t\t\tmax-height: 0;\n\t\t\t\tmax-width: 0;\n\t\t\t\toverflow: hidden;\n\t\t\t\tfont-size: 0px;\n\t\t\t}\n\n\t\t\t.desktop_hide,\n\t\t\t.desktop_hide table {\n\t\t\t\tdisplay: table !important;\n\t\t\t\tmax-height: none !important;\n\t\t\t}\n\n\t\t\t.row-1 .column-1 .block-3.heading_block h1,\n\t\t\t.row-1 .column-1 .block-8.heading_block h1,\n\t\t\t.row-1 .column-1 .block-9.heading_block h1,\n\t\t\t.row-3 .column-1 .block-4.heading_block h1,\n\t\t\t.row-3 .column-1 .block-6.paragraph_block td.pad>div,\n\t\t\t.row-3 .column-1 .block-7.heading_block h2 {\n\t\t\t\tfont-size: 17px !important;\n\t\t\t}\n\n\t\t\t.row-1 .column-1 .block-6.heading_block h1 {\n\t\t\t\tfont-size: 50px !important;\n\t\t\t}\n\n\t\t\t.row-1 .column-1 .block-5.heading_block td.pad {\n\t\t\t\tpadding: 0 0 10px !important;\n\t\t\t}\n\n\t\t\t.row-1 .column-1 .block-5.heading_block h1 {\n\t\t\t\tfont-size: 40px !important;\n\t\t\t}\n\n\t\t\t.row-1 .column-1 .block-9.heading_block td.pad {\n\t\t\t\tpadding: 5px !important;\n\t\t\t}\n\n\t\t\t.row-1 .column-1 .block-10.heading_block td.pad {\n\t\t\t\tpadding: 10px 0 0 !important;\n\t\t\t}\n\n\t\t\t.row-1 .column-1 .block-10.heading_block h1 {\n\t\t\t\tfont-size: 31px !important;\n\t\t\t}\n\n\t\t\t.row-1 .column-1 .block-8.heading_block td.pad {\n\t\t\t\tpadding: 5px 0 !important;\n\t\t\t}\n\n\t\t\t.row-3 .column-1 .block-2.heading_block h1 {\n\t\t\t\tfont-size: 23px !important;\n\t\t\t}\n\n\t\t\t.row-2 .column-1 .block-1.spacer_block {\n\t\t\t\theight: 350px !important;\n\t\t\t}\n\n\t\t\t.row-3 .column-1 .block-9.button_block a,\n\t\t\t.row-3 .column-1 .block-9.button_block div,\n\t\t\t.row-3 .column-1 .block-9.button_block span {\n\t\t\t\tfont-size: 17px !important;\n\t\t\t\tline-height: 34px !important;\n\t\t\t}\n\t\t}\n\t'
        }}
      />
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        className='nl-container'
        role='presentation'
        style={{
          msoTableLspace: '0pt',
          msoTableRspace: '0pt',
          backgroundColor: '#fff'
        }}
        width='100%'
      >
        <tbody>
          <tr>
            <td>
              <table
                align='center'
                border={0}
                cellPadding={0}
                cellSpacing={0}
                className='row row-1'
                role='presentation'
                style={{
                  msoTableLspace: '0pt',
                  msoTableRspace: '0pt',
                  backgroundColor: '#000000'
                }}
                width='100%'
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align='center'
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        className='row-content stack'
                        role='presentation'
                        style={{
                          msoTableLspace: '0pt',
                          msoTableRspace: '0pt',
                          backgroundColor: '#000',
                          color: '#000',
                          width: 640,
                          margin: '0 auto'
                        }}
                        width={640}
                      >
                        <tbody>
                          <tr>
                            <td
                              className='column column-1'
                              style={{
                                msoTableLspace: '0pt',
                                msoTableRspace: '0pt',
                                fontWeight: 400,
                                textAlign: 'left',
                                paddingBottom: 10,
                                paddingLeft: 20,
                                paddingRight: 20,
                                paddingTop: 15,
                                verticalAlign: 'top',
                                borderTop: 0,
                                borderRight: 0,
                                borderBottom: 0,
                                borderLeft: 0
                              }}
                              width='100%'
                            >
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className='image_block block-1'
                                role='presentation'
                                style={{
                                  msoTableLspace: '0pt',
                                  msoTableRspace: '0pt'
                                }}
                                width='100%'
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className='pad'
                                      style={{
                                        paddingBottom: 10,
                                        paddingTop: 10,
                                        width: '100%',
                                        paddingRight: 0,
                                        paddingLeft: 0
                                      }}
                                    >
                                      <div
                                        align='center'
                                        className='alignment'
                                        style={{ lineHeight: 10 }}
                                      >
                                        <a
                                          href='https://soreau.dev'
                                          style={{ outline: 'none' }}
                                          tabIndex={-1}
                                          target='_blank' rel='noreferrer'
                                        >
                                          <img 
                                            alt='Soreau Bastien'
                                            src="https://soreau.dev/_next/image?url=%2Flogo.png&w=1920&q=75"
                                            style={{
                                              display: 'block',
                                              height: '100px',
                                              border: 0,
                                              maxWidth: 120,
                                              width: '100%'
                                            }}
                                            title='Soreau Bastien'
                                            width={120}
                                            height={100}
                                            />
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div
                                className='spacer_block block-2'
                                style={{ height: 25, lineHeight: 25, fontSize: 1 }}
                              />
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className='heading_block block-3'
                                role='presentation'
                                style={{
                                  msoTableLspace: '0pt',
                                  msoTableRspace: '0pt'
                                }}
                                width='100%'
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className='pad'
                                      style={{ textAlign: 'center', width: '100%' }}
                                    >
                                      <h1
                                        style={{
                                          margin: 0,
                                          color: '#a5a5a5',
                                          direction: 'ltr',
                                          fontFamily:
                                            'Georgia, Times, "Times New Roman", serif',
                                          fontSize: 17,
                                          fontWeight: 400,
                                          letterSpacing: 1,
                                          lineHeight: '150%',
                                          textAlign: 'center',
                                          marginTop: 0,
                                          marginBottom: 0
                                        }}
                                      >
                                        <em>
                                          <span className='tinyMce-placeholder'>
                                            Confirmation contact - {jour}
                                          </span>
                                        </em>
                                      </h1>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div
                                className='spacer_block block-4'
                                style={{ height: 60, lineHeight: 60, fontSize: 1 }}
                              />
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className='heading_block block-5'
                                role='presentation'
                                style={{
                                  msoTableLspace: '0pt',
                                  msoTableRspace: '0pt'
                                }}
                                width='100%'
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className='pad'
                                      style={{ textAlign: 'center', width: '100%' }}
                                    >
                                      <h1
                                        style={{
                                          margin: 0,
                                          color: '#ffffff',
                                          direction: 'ltr',
                                          fontFamily:
                                            'Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif',
                                          fontSize: 40,
                                          fontWeight: 400,
                                          letterSpacing: 5,
                                          lineHeight: '150%',
                                          textAlign: 'center',
                                          marginTop: 0,
                                          marginBottom: 0
                                        }}
                                      >
                                        <span
                                          style={{
                                            backgroundColor: '#ffffff',
                                            color: '#000000'
                                          }}
                                        >
                                          &nbsp; SOREAU&nbsp;&nbsp;
                                        </span>
                                      </h1>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className='heading_block block-6'
                                role='presentation'
                                style={{
                                  msoTableLspace: '0pt',
                                  msoTableRspace: '0pt'
                                }}
                                width='100%'
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className='pad'
                                      style={{ textAlign: 'center', width: '100%' }}
                                    >
                                      <h1
                                        style={{
                                          margin: 0,
                                          color: '#ffffff',
                                          direction: 'ltr',
                                          fontFamily:
                                            'Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif',
                                          fontSize: 100,
                                          fontWeight: 400,
                                          letterSpacing: 10,
                                          lineHeight: '150%',
                                          textAlign: 'center',
                                          marginTop: 0,
                                          marginBottom: 0
                                        }}
                                      >
                                        <strong>
                                          <span className='tinyMce-placeholder'>
                                            Bastien
                                          </span>
                                        </strong>
                                      </h1>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div
                                className='spacer_block block-7'
                                style={{ height: 40, lineHeight: 40, fontSize: 1 }}
                              />
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className='heading_block block-8'
                                role='presentation'
                                style={{
                                  msoTableLspace: '0pt',
                                  msoTableRspace: '0pt'
                                }}
                                width='100%'
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className='pad'
                                      style={{ textAlign: 'center', width: '100%' }}
                                    >
                                      <h1
                                        style={{
                                          margin: 0,
                                          color: '#ffffff',
                                          direction: 'ltr',
                                          fontFamily:
                                            'Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif',
                                          fontSize: 30,
                                          fontWeight: 400,
                                          letterSpacing: 5,
                                          lineHeight: '150%',
                                          textAlign: 'center',
                                          marginTop: 0,
                                          marginBottom: 0
                                        }}
                                      >
                                        <span className='tinyMce-placeholder'>
                                          CONCEPTEUR / DÉVELOPPEUR
                                        </span>
                                      </h1>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className='heading_block block-9'
                                role='presentation'
                                style={{
                                  msoTableLspace: '0pt',
                                  msoTableRspace: '0pt'
                                }}
                                width='100%'
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className='pad'
                                      style={{ textAlign: 'center', width: '100%' }}
                                    >
                                      <h1
                                        style={{
                                          margin: 0,
                                          color: '#ffffff',
                                          direction: 'ltr',
                                          fontFamily:
                                            'Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif',
                                          fontSize: 60,
                                          fontWeight: 400,
                                          letterSpacing: 10,
                                          lineHeight: '150%',
                                          textAlign: 'center',
                                          marginTop: 0,
                                          marginBottom: 0
                                        }}
                                      >
                                        <strong>
                                          <span className='tinyMce-placeholder'>
                                            WEB
                                          </span>
                                        </strong>
                                      </h1>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className='heading_block block-10'
                                role='presentation'
                                style={{
                                  msoTableLspace: '0pt',
                                  msoTableRspace: '0pt'
                                }}
                                width='100%'
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className='pad'
                                      style={{ textAlign: 'center', width: '100%' }}
                                    >
                                      <h1
                                        style={{
                                          margin: 0,
                                          color: '#7747FF',
                                          direction: 'ltr',
                                          fontFamily:
                                            'Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif',
                                          fontSize: 46,
                                          fontWeight: 700,
                                          letterSpacing: 'normal',
                                          lineHeight: '150%',
                                          textAlign: 'center',
                                          marginTop: 0,
                                          marginBottom: 0
                                        }}
                                      >
                                        <span className='tinyMce-placeholder'>
                                          👋😁
                                        </span>
                                      </h1>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div
                                className='spacer_block block-11'
                                style={{ height: 25, lineHeight: 25, fontSize: 1 }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align='center'
                border={0}
                cellPadding={0}
                cellSpacing={0}
                className='row row-2'
                role='presentation'
                style={{
                  msoTableLspace: '0pt',
                  msoTableRspace: '0pt',
                  backgroundColor: '#000000',
                  backgroundImage:
                    "https://soreau.dev/_next/image?url=%2Fbastien-soreau-email-hacker.png&w=1920&q=75",
                  backgroundSize: 'cover'
                }}
                width='100%'
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align='center'
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        className='row-content stack'
                        role='presentation'
                        style={{
                          msoTableLspace: '0pt',
                          msoTableRspace: '0pt',
                          backgroundSize: 'auto',
                          borderRadius: 0,
                          color: '#000',
                          width: 640,
                          margin: '0 auto'
                        }}
                        width={640}
                      >
                        <tbody>
                          <tr>
                            <td
                              className='column column-1'
                              style={{
                                msoTableLspace: '0pt',
                                msoTableRspace: '0pt',
                                fontWeight: 400,
                                textAlign: 'left',
                                verticalAlign: 'top',
                                borderTop: 0,
                                borderRight: 0,
                                borderBottom: 0,
                                borderLeft: 0
                              }}
                              width='100%'
                            >
                              <div
                                className='spacer_block block-1'
                                style={{
                                  height: 'auto',
                                  border: 0,
                                  maxWidth: '100%',
                                  width: '100%',
                                  lineHeight: 800,
                                  fontSize: 1
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align='center'
                border={0}
                cellPadding={0}
                cellSpacing={0}
                className='row row-3'
                role='presentation'
                style={{
                  msoTableLspace: '0pt',
                  msoTableRspace: '0pt',
                  backgroundColor: '#ffffff'
                }}
                width='100%'
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align='center'
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        className='row-content stack'
                        role='presentation'
                        style={{
                          msoTableLspace: '0pt',
                          msoTableRspace: '0pt',
                          backgroundColor: '#fff',
                          color: '#000',
                          width: 640,
                          margin: '0 auto'
                        }}
                        width={640}
                      >
                        <tbody>
                          <tr>
                            <td
                              className='column column-1'
                              style={{
                                msoTableLspace: '0pt',
                                msoTableRspace: '0pt',
                                fontWeight: 400,
                                textAlign: 'left',
                                paddingBottom: 30,
                                paddingLeft: 20,
                                paddingRight: 20,
                                paddingTop: 20,
                                verticalAlign: 'top',
                                borderTop: 0,
                                borderRight: 0,
                                borderBottom: 0,
                                borderLeft: 0
                              }}
                              width='100%'
                            >
                              <div
                                className='spacer_block block-1'
                                style={{ height: 50, lineHeight: 50, fontSize: 1 }}
                              />
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className='heading_block block-2'
                                role='presentation'
                                style={{
                                  msoTableLspace: '0pt',
                                  msoTableRspace: '0pt'
                                }}
                                width='100%'
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className='pad'
                                      style={{ textAlign: 'center', width: '100%' }}
                                    >
                                      <h1
                                        style={{
                                          margin: 0,
                                          color: '#000000',
                                          direction: 'ltr',
                                          fontFamily:
                                            'Georgia, Times, "Times New Roman", serif',
                                          fontSize: 30,
                                          fontWeight: 400,
                                          letterSpacing: 1,
                                          lineHeight: '150%',
                                          textAlign: 'center',
                                          marginTop: 0,
                                          marginBottom: 0
                                        }}
                                      >
                                        <em>Bonjour <strong>{name}</strong></em>
                                      </h1>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div
                                className='spacer_block block-3'
                                style={{ height: 25, lineHeight: 25, fontSize: 1 }}
                              />
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className='heading_block block-4'
                                role='presentation'
                                style={{
                                  msoTableLspace: '0pt',
                                  msoTableRspace: '0pt'
                                }}
                                width='100%'
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className='pad'
                                      style={{ textAlign: 'center', width: '100%' }}
                                    >
                                      <h1
                                        style={{
                                          margin: 0,
                                          color: '#000000',
                                          direction: 'ltr',
                                          fontFamily:
                                            'Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif',
                                          fontSize: 22,
                                          fontWeight: 400,
                                          letterSpacing: 5,
                                          lineHeight: '150%',
                                          textAlign: 'center',
                                          marginTop: 0,
                                          marginBottom: 0
                                        }}
                                      >
                                        J&apos;ai bien reçu votre message et je vous
                                        remercie.
                                      </h1>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div
                                className='spacer_block block-5'
                                style={{ height: 25, lineHeight: 25, fontSize: 1 }}
                              />
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className='paragraph_block block-6'
                                role='presentation'
                                style={{
                                  msoTableLspace: '0pt',
                                  msoTableRspace: '0pt',
                                  wordBreak: 'break-word'
                                }}
                                width='100%'
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className='pad'
                                      style={{
                                        paddingBottom: 10,
                                        paddingLeft: 20,
                                        paddingRight: 20,
                                        paddingTop: 10
                                      }}
                                    >
                                      <div
                                        style={{
                                          color: '#000000',
                                          direction: 'ltr',
                                          fontFamily:
                                            'Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif',
                                          fontSize: 22,
                                          fontWeight: 400,
                                          letterSpacing: 0,
                                          lineHeight: '150%',
                                          textAlign: 'left',
                                          msoLineHeightAlt: 33,
                                          textAlign: 'center',
                                        }}
                                      >
                                        <p style={{ margin: 0, marginBottom: 16 }}>
                                          Objet :&nbsp;<strong> {objet}</strong>
                                        </p>
                                        <p style={{ margin: 0 }}>
                                          Message : &nbsp;
                                          <strong>
                                            {message}
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
                                className='heading_block block-7'
                                role='presentation'
                                style={{
                                  msoTableLspace: '0pt',
                                  msoTableRspace: '0pt'
                                }}
                                width='100%'
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className='pad'
                                      style={{
                                        paddingTop: 10,
                                        textAlign: 'center',
                                        width: '100%'
                                      }}
                                    >
                                      <h2
                                        style={{
                                          margin: 0,
                                          color: '#000000',
                                          direction: 'ltr',
                                          fontFamily:
                                            'Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif',
                                          fontSize: 28,
                                          fontWeight: 400,
                                          letterSpacing: 'normal',
                                          lineHeight: '120%',
                                          textAlign: 'center',
                                          marginTop: 0,
                                          marginBottom: 0
                                        }}
                                      >
                                        <strong>
                                          <span className='tinyMce-placeholder'>
                                            Je reviendrai vers vous dans le plus{' '}
                                            <span style={{ color: '#f81313' }}>
                                              BREF DÉLAIS
                                            </span>
                                          </span>
                                        </strong>
                                      </h2>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div
                                className='spacer_block block-10'
                                style={{ height: 50, lineHeight: 50, fontSize: 1 }}
                              />
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className='button_block block-9'
                                role='presentation'
                                style={{
                                  msoTableLspace: '0pt',
                                  msoTableRspace: '0pt'
                                }}
                                width='100%'
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className='pad'
                                      style={{ textAlign: 'center' }}
                                    >
                                      <div align='center' className='alignment'>
                                        {/* [if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://soreau.dev" style="height:47px;width:223px;v-text-anchor:middle;" arcsize="0%" strokeweight="0.75pt" strokecolor="#C1CEDC" fillcolor="#000000"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:18px"><![endif] */}
                                        <a
                                          href='https://soreau.dev'
                                          style={{
                                            textDecoration: 'none',
                                            display: 'inline-block',
                                            color: '#ffffff',
                                            backgroundColor: '#000000',
                                            borderRadius: 0,
                                            width: 'auto',
                                            height: 'auto',
                                            borderTop: '1px solid #C1CEDC',
                                            fontWeight: 400,
                                            borderRight: '1px solid #C1CEDC',
                                            borderBottom: '1px solid #C1CEDC',
                                            borderLeft: '1px solid #C1CEDC',
                                            paddingTop: 5,
                                            paddingBottom: 5,
                                            fontFamily:
                                              'Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif',
                                            fontSize: 18,
                                            textAlign: 'center',
                                            msoBorderAlt: 'none',
                                            wordBreak: 'keep-all'
                                          }}
                                          target='_blank' rel='noreferrer'
                                        >
                                          <span
                                            style={{
                                              paddingLeft: 20,
                                              paddingRight: 20,
                                              paddingTop: 10,
                                              paddingBottom: 10,
                                              fontSize: 18,
                                              display: 'inline-block',
                                              letterSpacing: 3
                                            }}
                                          >
                                            <span
                                              style={{
                                                wordBreak: 'break-word',
                                                lineHeight: 'auto'
                                              }}
                                            >
                                              VOIR MON SITE
                                            </span>
                                          </span>
                                        </a>
                                        {/* [if mso]></center></v:textbox></v:roundrect><![endif] */}
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div
                                className='spacer_block block-10'
                                style={{ height: 50, lineHeight: 50, fontSize: 1 }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align='center'
                border={0}
                cellPadding={0}
                cellSpacing={0}
                className='row row-4'
                role='presentation'
                style={{
                  msoTableLspace: '0pt',
                  msoTableRspace: '0pt',
                  backgroundColor: '#000000'
                }}
                width='100%'
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align='center'
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        className='row-content stack'
                        role='presentation'
                        style={{
                          msoTableLspace: '0pt',
                          msoTableRspace: '0pt',
                          backgroundColor: '#000',
                          color: '#000',
                          width: 640,
                          margin: '0 auto'
                        }}
                        width={640}
                      >
                        <tbody>
                          <tr>
                            <td
                              className='column column-1'
                              style={{
                                msoTableLspace: '0pt',
                                msoTableRspace: '0pt',
                                fontWeight: 400,
                                textAlign: 'left',
                                paddingBottom: 25,
                                paddingTop: 50,
                                verticalAlign: 'top',
                                borderTop: 0,
                                borderRight: 0,
                                borderBottom: 0,
                                borderLeft: 0
                              }}
                              width='100%'
                            >
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className='image_block block-1'
                                role='presentation'
                                style={{
                                  msoTableLspace: '0pt',
                                  msoTableRspace: '0pt'
                                }}
                                width='100%'
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className='pad'
                                      style={{
                                        paddingBottom: 15,
                                        paddingLeft: 10,
                                        width: '100%',
                                        paddingRight: 0
                                      }}
                                    >
                                      <div
                                        align='center'
                                        className='alignment'
                                        style={{ lineHeight: 10 }}
                                      >
                                        <a
                                          href='https://soreau.dev'
                                          style={{ outline: 'none' }}
                                          tabIndex={-1}
                                          target='_blank' rel='noreferrer'
                                        >
                                          <img
                                            alt='Soreau Bastien Hacker'
                                            src='https://soreau.dev/_next/image?url=%2Flogo.png&w=1920&q=75'
                                            style={{
                                              display: 'block',
                                              height: 'auto',
                                              border: 0,
                                              maxWidth: 128,
                                              width: '100%'
                                            }}
                                            title='Soreau Bastien Hacker'
                                            width={128}
                                            height={128}
                                          />
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border={0}
                                cellPadding={10}
                                cellSpacing={0}
                                className='social_block block-2'
                                role='presentation'
                                style={{
                                  msoTableLspace: '0pt',
                                  msoTableRspace: '0pt'
                                }}
                                width='100%'
                              >
                                <tbody>
                                  <tr>
                                    <td className='pad'>
                                      <div align='center' className='alignment'>
                                        <table
                                          border={0}
                                          cellPadding={0}
                                          cellSpacing={0}
                                          className='social-table'
                                          role='presentation'
                                          style={{
                                            msoTableLspace: '0pt',
                                            msoTableRspace: '0pt',
                                            display: 'inline-block'
                                          }}
                                          width='156px'
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style={{ padding: '0 10px 0 10px' }}
                                              >
                                                <a
                                                  href='https://www.facebook.com/bastien.soreau'
                                                  target='_blank' rel='noreferrer'
                                                >
                                                  <img
                                                    alt='Soreau Bastien Facebook'
                                                    src='https://soreau.dev/_next/image?url=%2Ffacebook.png&w=1920&q=75'
                                                    style={{
                                                      display: 'block',
                                                      height: 'auto',
                                                      border: 0
                                                    }}
                                                    title='soreau bastien facebook'
                                                    width={32}
                                                    height={32}
                                                  />
                                                </a>
                                              </td>
                                              <td
                                                style={{ padding: '0 10px 0 10px' }}
                                              >
                                                <a
                                                  href='https://www.instagram.com/bastiensoreau/'
                                                  target='_blank' rel='noreferrer'
                                                >
                                                  <img
                                                    alt='Soreau Bastien Instagram'
                                                    src='https://soreau.dev/_next/image?url=%2Finstagram.png&w=1920&q=75'
                                                    style={{
                                                      display: 'block',
                                                      height: 'auto',
                                                      border: 0
                                                    }}
                                                    title='soreau bastien instagram'
                                                    width={32}
                                                    height={32}
                                                  />
                                                </a>
                                              </td>
                                              <td
                                                style={{ padding: '0 10px 0 10px' }}
                                              >
                                                <a
                                                  href='https://www.youtube.com/@bastiensoreau6156'
                                                  target='_blank' rel='noreferrer'
                                                >
                                                  <img
                                                    alt='Soreau Bastien YouTube'
                                                    src='https://soreau.dev/_next/image?url=%2Fyoutube.png&w=1920&q=75'
                                                    style={{
                                                      display: 'block',
                                                      height: 'auto',
                                                      border: 0
                                                    }}
                                                    title='soreau bastien youtube'
                                                    width={32}
                                                    height={32}
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
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                className='paragraph_block block-3'
                                role='presentation'
                                style={{
                                  msoTableLspace: '0pt',
                                  msoTableRspace: '0pt',
                                  wordBreak: 'break-word'
                                }}
                                width='100%'
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className='pad'
                                      style={{
                                        paddingBottom: 10,
                                        paddingLeft: 20,
                                        paddingRight: 20,
                                        paddingTop: 10
                                      }}
                                    >
                                      <div
                                        style={{
                                          color: '#ffffff',
                                          direction: 'ltr',
                                          fontFamily:
                                            'Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif',
                                          fontSize: 12,
                                          fontWeight: 400,
                                          letterSpacing: 0,
                                          lineHeight: '150%',
                                          textAlign: 'center',
                                          msoLineHeightAlt: 18
                                        }}
                                      >
                                        <p style={{ margin: 0 }}>
                                          Phone: +33 6 09 40 38 94 -
                                          contact@soreau.dev
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
                                className='paragraph_block block-4'
                                role='presentation'
                                style={{
                                  msoTableLspace: '0pt',
                                  msoTableRspace: '0pt',
                                  wordBreak: 'break-word'
                                }}
                                width='100%'
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className='pad'
                                      style={{
                                        paddingBottom: 15,
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        paddingTop: 15
                                      }}
                                    >
                                      <div
                                        style={{
                                          color: '#a5a5a5',
                                          fontFamily:
                                            'Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif',
                                          fontSize: 14,
                                          fontWeight: 400,
                                          lineHeight: '120%',
                                          textAlign: 'center',
                                          msoLineHeightAlt: '16.8px'
                                        }}
                                      >
                                        <p
                                          style={{
                                            margin: 0,
                                            wordBreak: 'break-word'
                                          }}
                                        >
                                          SOREAU Bastein © - {annee} Tous droits réservés
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
            </td>
          </tr>
        </tbody>
      </table>
      {/* End */}
    </>

  )
}

export default ClientEmailContent
