import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import { motion, useInView } from 'framer-motion';
import './ProductsDetails.css';
import { Helmet } from 'react-helmet';
import { useRef } from 'react';

const ProductsDetails = (props) => {
  const textVariantsSlow = {
    initial: {
      x: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-50px' });
  return (
    <Layout>
      <Helmet>
        <title>{props.title} - Parmeshwar Steel Center</title>
        <meta
          name="description"
          content="Parmeshwar Steel - Manufacturer of Stainless Steel Pipes, Carbon Steel Pipe Fittings & Stainless Steel Flanges from Mumbai, Maharashtra, India."
        />
        <meta
          name="keywords"
          content="Flanges, Pipes, Bold / Fastners, Angle / Channels, Bars / Wires, percentage alloys, Rods"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Helmet>
      <div className="py-3 px-lg-3 px-2 border">
        <div className="">
          <Link to="/products">
            <button
              className="px-1 py-1 bg-white"
              style={{
                borderRadius: '50%',
                border: '2px solid #015583',
                overflow: 'hidden',
              }}
            >
              <BsArrowLeft size={30} color="#015583" />
            </button>
          </Link>
          <motion.div
            variants={textVariantsSlow}
            initial="initial"
            animate="animate"
            className="d-flex  flex-column justify-content-center align-items-center py-2"
          >
            <motion.h1 className="display-1 fw-bold m-0 col-12 text-center">
              {props.h1}
            </motion.h1>
            <motion.div
              className="image-block border my-3"
              style={{
                width: '600px',
                maxWidth: '100%',
                height: '250px',
                overflow: 'hidden',
                borderRadius: '10px',
              }}
            >
              <motion.img
                src={props.imageSection}
                alt={props.h1}
                className="img-block-child border"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </motion.div>
            {!props.heading1Main ? (
              ''
            ) : (
              <h2 className="fw-bold py-2 text-lg-start text-center">
                {props.heading1Main}
              </h2>
            )}

            {props.aboutSection.length !== 0 ? (
              <>
                <p className="text-center paraSize">
                  {props.aboutSection.paragraph1}
                </p>
              </>
            ) : (
              ''
            )}
          </motion.div>
          {!props.productTables.points ? (
            ''
          ) : (
            <motion.div
              variants={textVariantsSlow}
              initial="initial"
              whileInView="animate"
              ref={ref}
              animate={isInView && 'animate'}
              className="my-4"
            >
              <motion.div className="px-lg-5 px-0">
                <>
                  {!props.productTables.pointHead ? (
                    ''
                  ) : (
                    <h3 className="">{props.productTables.pointHead}</h3>
                  )}
                  {!props.productTables.pointPara ? (
                    ''
                  ) : (
                    <p className="paraSizeEx">
                      {props.productTables.pointPara}
                    </p>
                  )}
                </>
                <div className="py-2 bg-primary">
                  <h4 className="text-white my-auto text-center">
                    {props.productTables.title}
                  </h4>
                </div>
                <Table
                  bordered
                  responsive="md"
                  style={{ border: '1px solid #000' }}
                >
                  <tbody className="text-center">
                    {props.productTables.heading.map((item) => (
                      <tr>
                        <th className="table-th-width">{item.Srno}</th>
                        <th>{item.title}</th>
                      </tr>
                    ))}
                    {props.productTables.points.map((item) => (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </motion.div>
            </motion.div>
          )}
          {!props.productTables.points1 ? (
            ''
          ) : (
            <motion.div
              variants={textVariantsSlow}
              initial="initial"
              whileInView="animate"
              ref={ref}
              animate={isInView && 'animate'}
              className="my-4"
            >
              <motion.div className="px-lg-5 px-0">
                {!props.productTables.title1 ? (
                  ''
                ) : (
                  <div className="py-2 bg-primary">
                    <h4 className="text-white my-auto text-center">
                      {props.productTables.title1}
                    </h4>
                  </div>
                )}
                <>
                  {!props.productTables.point1Head ? (
                    ''
                  ) : (
                    <h3 className="">{props.productTables.point1Head}</h3>
                  )}
                  {!props.productTables.point1Para ? (
                    ''
                  ) : (
                    <p className="paraSizeEx">
                      {props.productTables.point1Para}
                    </p>
                  )}
                </>

                <Table
                  bordered
                  responsive="md"
                  style={{ border: '1px solid #000' }}
                >
                  <tbody className="text-center">
                    {props.productTables.heading1.map((item) => (
                      <tr>
                        <th className="table-th-width">{item.Srno}</th>
                        <th>{item.title}</th>
                      </tr>
                    ))}
                    {props.productTables.points1.map((item) => (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </motion.div>
            </motion.div>
          )}

          {props.ifTrue === 'true' ? (
            <motion.div
              variants={textVariantsSlow}
              initial="initial"
              whileInView="animate"
              ref={ref}
              animate={isInView && 'animate'}
              className="px-lg-5 px-0"
            >
              <Table
                bordered
                responsive="md"
                style={{ border: '1px solid #000' }}
              >
                <tbody className="text-center">
                  <tr>
                    <td className="fw-bold table-th-width" rowSpan="7">
                      Stainless Steel
                    </td>
                    <td>
                      <b>200 Series – </b>201, 202, 205.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>300 Series</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      301, 302, 303, 304, 304L, 308, 309, 309S, 310, 310S, 314,
                      316, 316L, 316TI, 317, 317L, 321, 347.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>400 Series</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      405, 409, 429, 430, 430F, 430FSe, 434, 436, 442, 446, 403,
                      410, 414,416, 416Se, 420,420F, 422, 431, 440A, 440B, 440C.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b> 500 Series – </b>501, 502.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>600 Series –</b> 630 (17-4 PH).
                    </td>
                  </tr>

                  <tr>
                    <td className="fw-bold" rowSpan={2}>
                      Carbon Steel
                    </td>
                    <td>ASTM / ASME A105.</td>
                  </tr>
                  <tr>
                    <td>ASTM / ASME A 350 LF 2 .</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Alloy Steel</td>
                    <td>
                      ASTM / ASME A 182 GR F 5, F 9 , F 11 , F 12 , F 22 , F 91.
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Duplex / Super Duplex Steel</td>
                    <td>
                      D S31803, D S32205, SD S32750, SD S32760, SD S32950.
                    </td>
                  </tr>

                  <tr>
                    <td className="fw-bold">Inconel</td>
                    <td>601, 625, 660A, 718, X-750, 825, 925, 608.</td>
                  </tr>

                  <tr>
                    <td className="fw-bold">Monel</td>
                    <td>400, K500.</td>
                  </tr>

                  <tr>
                    <td className="fw-bold">Hastelloy</td>
                    <td>C22, C276, X, B-2.</td>
                  </tr>
                </tbody>
              </Table>
            </motion.div>
          ) : (
            ''
          )}
          {props.tablefittingIfTrue === 'true' ? (
            <motion.div
              variants={textVariantsSlow}
              initial="initial"
              whileInView="animate"
              ref={ref}
              animate={isInView && 'animate'}
              className="my-4"
            >
              <motion.div className="px-lg-5 px-0">
                <h3>Stainless Steel Forged Fittings Mechanical Properties</h3>
                <p className="paraSizeEx">
                  The mechanical properties of the stainless steel forged
                  fittings are displayed in the following table:
                </p>
                <div className="py-2 bg-primary">
                  <h4 className="text-white my-auto text-center">
                     Mechanical Properties
                  </h4>
                </div>
                <Table
                  bordered
                  responsive="md"
                  style={{ border: '1px solid #000' }}
                >
                  <tbody className="text-center">
                    <tr>
                      <th className="table-th-width" rowSpan={2}>
                        Type
                      </th>
                      <th rowSpan={2}>UNS</th>
                      <th>Tensile</th>
                      <th>Yield</th>
                      <th>Elongation</th>
                      <th>Hardness</th>
                      <th>Hardness</th>
                    </tr>

                    <tr>
                      <th>(KSI) min</th>
                      <th>(KSI) min</th>
                      <th>min</th>
                      <th>(Brinell) max</th>
                      <th>(Rockwell B) max</th>
                    </tr>
                    <tr>
                      <td>304*</td>
                      <td>S30400</td>
                      <td>75</td>
                      <td>30</td>
                      <td>40% in 2″</td>
                      <td>183</td>
                      <td>88</td>
                    </tr>
                    <tr>
                      <td>304L*</td>
                      <td>S30403</td>
                      <td>70</td>
                      <td>30</td>
                      <td>40% in 2″</td>
                      <td>183</td>
                      <td>88</td>
                    </tr>
                    <tr>
                      <td>316*</td>
                      <td>S31600</td>
                      <td>75</td>
                      <td>30</td>
                      <td>40% in 2″</td>
                      <td>217</td>
                      <td>95</td>
                    </tr>
                    <tr>
                      <td>316L*</td>
                      <td>S31603</td>
                      <td>70</td>
                      <td>25</td>
                      <td>35% in 2″</td>
                      <td>217</td>
                      <td>95</td>
                    </tr>
                    <tr>
                      <td>321</td>
                      <td>S32100</td>
                      <td>75</td>
                      <td>30</td>
                      <td>40% in 2″</td>
                      <td>183</td>
                      <td>88</td>
                    </tr>
                  </tbody>
                </Table>
              </motion.div>
            </motion.div>
          ) : (
            ''
          )}

          {/* Flanges */}
          {props.ifFlangesTrue === 'true' ? (
            <motion.div
              variants={textVariantsSlow}
              initial="initial"
              whileInView="animate"
              ref={ref}
              animate={isInView && 'animate'}
              className="px-lg-5 px-0"
            >
              <h3>Flanges Grades & Specifications:</h3>
              <p className="paraSizeEx">
                For the needs of any project, these flanges are available in a
                range of grades and standards. In order for you to purchase
                flanges with assurance, we have listed the various grades and
                specifications in this chart.
              </p>
              <Table
                bordered
                responsive="md"
                style={{ border: '1px solid #000' }}
              >
                <tbody className="text-center">
                  <tr>
                    <th>Flanges</th>
                    <th>Specifications</th>
                  </tr>
                  <tr>
                    <th className="fw-bold table-th-width">Type of Flanges</th>
                    <td>
                      Slip-On, Weld Neck, Long Weld Neck, Threaded, Blind,
                      Companion, Lap Joint.
                    </td>
                  </tr>
                  <tr>
                    <th>Size</th>
                    <td>1/2″ (15 NB) to 48″ (1200NB) DN10~DN5000.</td>
                  </tr>
                  <tr>
                    <th>Type</th>
                    <td>
                      Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ),
                      Lap-Joint Face (LJF), Large Male-Female (LMF), Small
                      Male-Female (SMF), Large Tongue & Groove, Small Tongue,
                      Groove.
                    </td>
                  </tr>
                  <tr>
                    <th colSpan="2">Brand</th>
                  </tr>
                  <tr>
                    <td className="fw-bold table-th-width" rowSpan="7">
                      Stainless Steel
                    </td>
                    <td>
                      <b>200 Series – </b>201, 202, 205.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>300 Series</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      301, 302, 303, 304, 304L, 308, 309, 309S, 310, 310S, 314,
                      316, 316L, 316TI, 317, 317L, 321, 347.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>400 Series</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      405, 409, 429, 430, 430F, 430FSe, 434, 436, 442, 446, 403,
                      410, 414,416, 416Se, 420,420F, 422, 431, 440A, 440B, 440C.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b> 500 Series – </b>501, 502.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>600 Series –</b> 630 (17-4 PH).
                    </td>
                  </tr>

                  <tr>
                    <td className="fw-bold" rowSpan={2}>
                      Carbon Steel
                    </td>
                    <td>ASTM / ASME A105.</td>
                  </tr>
                  <tr>
                    <td>ASTM / ASME A 350 LF 2 .</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Alloy Steel</td>
                    <td>
                      ASTM / ASME A 182 GR F 5, F 9 , F 11 , F 12 , F 22 , F 91.
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Duplex / Super Duplex Steel</td>
                    <td>
                      D S31803, D S32205, SD S32750, SD S32760, SD S32950.
                    </td>
                  </tr>

                  <tr>
                    <td className="fw-bold">Inconel</td>
                    <td>601, 625, 660A, 718, X-750, 825, 925, 608.</td>
                  </tr>

                  <tr>
                    <td className="fw-bold">Monel</td>
                    <td>400, K500.</td>
                  </tr>

                  <tr>
                    <td className="fw-bold">Hastelloy</td>
                    <td>C22, C276, X, B-2.</td>
                  </tr>
                </tbody>
              </Table>
            </motion.div>
          ) : (
            ''
          )}
          {/* Flanges */}

          {/* Flanges part 2 start */}
          {props.tableFlangesIfTrue === 'true' ? (
            <motion.div
              variants={textVariantsSlow}
              initial="initial"
              whileInView="animate"
              ref={ref}
              animate={isInView && 'animate'}
              className="my-4"
            >
              <motion.div
                variants={textVariantsSlow}
                initial="initial"
                whileInView="animate"
                ref={ref}
                animate={isInView && 'animate'}
                className="px-lg-5 px-0"
              >
                <h3>Dimensions Chart Of Flanges:</h3>
                <p className="paraSizeEx">
                  The size and type of flange might change its dimensions. We
                  will discuss the various flange dimensions in this chart and
                  present a chart to help you in choosing the right flange for
                  your requirements
                </p>

                <Table
                  bordered
                  responsive="md"
                  style={{ border: '1px solid #000' }}
                >
                  <tbody className="text-center">
                    <tr>
                      <th className="table-th-width">DN</th>
                      <th rowSpan={2}>Dimension</th>
                      <th rowSpan={2} colSpan={14}>
                        ANSI B16.5 Flange Dimensional Sizes 3 to 10 inches Table
                        Chart
                      </th>
                    </tr>
                    <tr>
                      <th>(inch)</th>
                    </tr>
                    <tr>
                      <td colSpan={2}>125 lbs</td>
                      <td rowSpan={2} colSpan={2}>
                        300 lbs
                      </td>
                      <td rowSpan={2} colSpan={2}>
                        400 lbs
                      </td>
                      <td rowSpan={2} colSpan={2}>
                        600 lbs
                      </td>
                      <td rowSpan={2} colSpan={2}>
                        900 lbs
                      </td>
                      <td rowSpan={2} colSpan={2}>
                        1500 lbs
                      </td>
                      <td rowSpan={2} colSpan={4}>
                        2500 lbs
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>125 lbs</td>
                    </tr>
                    <tr>
                      <td>inch</td>
                      <td>mm</td>
                      <td>inch</td>
                      <td>mm</td>
                      <td>inch</td>
                      <td>mm</td>
                      <td>inch</td>
                      <td>mm</td>
                      <td>inch</td>
                      <td>mm</td>
                      <td>inch</td>
                      <td>mm</td>
                      <td colSpan={3}>inch</td>
                      <td>mm</td>
                    </tr>

                    <tr>
                      <th rowSpan={7}>3</th>
                    </tr>
                    <tr>
                      <td>a</td>
                      <td>7 1/2</td>
                      <td>190.5</td>

                      <td>81/4</td>
                      <td>209.6</td>

                      <td>81/4</td>
                      <td>209.6</td>

                      <td>8 1/4</td>
                      <td>209.6</td>

                      <td>9 1/2</td>
                      <td>241</td>

                      <td>10 1/2</td>
                      <td>267</td>
                      <td>12</td>

                      <td>305</td>
                    </tr>
                    <tr>
                      <td>b</td>

                      <td>15/16</td>
                      <td>23.8</td>

                      <td>1 1/8</td>
                      <td>28.6</td>

                      <td>4-Nov</td>
                      <td>31.8</td>

                      <td>1 1/4</td>
                      <td>31.8</td>

                      <td>1 1/2</td>
                      <td>38.1</td>

                      <td>1 7/8</td>
                      <td>47.6</td>
                      <td>2 5/8</td>

                      <td>66.7</td>
                    </tr>
                    <tr>
                      <td>D2</td>

                      <td>5</td>
                      <td>127</td>

                      <td>5</td>
                      <td>127</td>

                      <td>5</td>
                      <td>127</td>

                      <td>5</td>
                      <td>127</td>

                      <td>5</td>
                      <td>127</td>

                      <td>5</td>
                      <td>127</td>
                      <td>5</td>

                      <td>127</td>
                    </tr>
                    <tr>
                      <td>D1</td>

                      <td>6</td>
                      <td>152.4</td>

                      <td>6 5/8</td>
                      <td>168.3</td>

                      <td>168.3</td>
                      <td>127</td>

                      <td>6 5/8</td>
                      <td>168.3</td>

                      <td>71/2</td>
                      <td>190.5</td>

                      <td>8</td>
                      <td>203</td>
                      <td>9</td>

                      <td>228.6</td>
                    </tr>

                    <tr>
                      <td>n</td>

                      <td>4</td>
                      <td>4</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                    </tr>

                    <tr>
                      <td>d</td>

                      <td>4-Mar</td>
                      <td>4-Mar</td>

                      <td>8-Jul</td>
                      <td>22.2</td>

                      <td>8-Jul</td>
                      <td>22.2</td>

                      <td>8-Jul</td>
                      <td>22.2</td>

                      <td>1</td>
                      <td>25.4</td>

                      <td>1 1/4</td>
                      <td>31.8</td>
                      <td>1 3/8</td>

                      <td>34.9</td>
                    </tr>

                    <tr>
                      <th rowSpan={7}>3 1/2</th>
                    </tr>
                    <tr>
                      <td>A</td>

                      <td>8 1/2</td>
                      <td>215.9</td>

                      <td>9</td>
                      <td>228.6</td>

                      <td>9</td>
                      <td>228.6</td>

                      <td>9</td>
                      <td>228.6</td>

                      <td>-</td>
                      <td>-</td>

                      <td>-</td>
                      <td>-</td>
                      <td>-</td>

                      <td>-</td>
                    </tr>
                    <tr>
                      <td>b</td>

                      <td>15/16</td>
                      <td>23.8</td>

                      <td>13/16</td>
                      <td>30.2</td>

                      <td>13/8</td>
                      <td>34.9</td>

                      <td>13/8</td>
                      <td>34.9</td>

                      <td>-</td>
                      <td>-</td>

                      <td>-</td>
                      <td>-</td>
                      <td>-</td>

                      <td>-</td>
                    </tr>
                    <tr>
                      <td>D2</td>

                      <td>5 1/2</td>
                      <td>139.7</td>

                      <td>2-May</td>
                      <td>139.7</td>

                      <td>5 1/2</td>
                      <td>139.7</td>

                      <td>5 1/2</td>
                      <td>139.7</td>

                      <td>-</td>
                      <td>-</td>

                      <td>-</td>
                      <td>-</td>
                      <td>-</td>

                      <td>-</td>
                    </tr>

                    <tr>
                      <td>D1</td>

                      <td>7</td>
                      <td>177.8</td>

                      <td>7 1/4</td>
                      <td>184.2</td>

                      <td>7 1/4</td>
                      <td>184.2</td>

                      <td>7 1/4</td>
                      <td>184.2</td>

                      <td>-</td>
                      <td>-</td>

                      <td>-</td>
                      <td>-</td>
                      <td>-</td>

                      <td>-</td>
                    </tr>

                    <tr>
                      <td>n</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>

                      <td>-</td>
                      <td>-</td>

                      <td>-</td>
                      <td>-</td>
                      <td>-</td>

                      <td>-</td>
                    </tr>

                    <tr>
                      <td>d</td>

                      <td>4-Mar</td>
                      <td>19</td>

                      <td>8-Jul</td>
                      <td>22.2</td>

                      <td>1</td>
                      <td>25.4</td>

                      <td>1</td>
                      <td>25.4</td>

                      <td>-</td>
                      <td>-</td>

                      <td>-</td>
                      <td>-</td>
                      <td>-</td>

                      <td>-</td>
                    </tr>

                    <tr>
                      <th rowSpan={7}>4</th>
                    </tr>

                    <tr>
                      <td>A</td>

                      <td>9</td>
                      <td>228.6</td>

                      <td>10</td>
                      <td>254</td>

                      <td>10</td>
                      <td>254</td>

                      <td>10 3/4</td>
                      <td>273</td>

                      <td>11 1/2</td>
                      <td>292</td>

                      <td>12 1/4</td>
                      <td>311</td>
                      <td>14</td>

                      <td>356</td>
                    </tr>

                    <tr>
                      <td>b</td>

                      <td>15/16</td>
                      <td>23.8</td>

                      <td>1 1/4</td>
                      <td>31.7</td>

                      <td>1 3/8</td>
                      <td>34.9</td>

                      <td>1 1/2</td>
                      <td>38.1</td>

                      <td>1 3/4</td>
                      <td>44.4</td>

                      <td>2 1/8</td>
                      <td>54</td>
                      <td>3</td>

                      <td>76.2</td>
                    </tr>

                    <tr>
                      <td>D2</td>

                      <td>6 3/16</td>
                      <td>157.2</td>

                      <td>6 3/16</td>
                      <td>157.2</td>

                      <td>6 3/16</td>
                      <td>157.2</td>

                      <td>6 3/16</td>
                      <td>157.2</td>

                      <td>6 3/16</td>
                      <td>157.2</td>

                      <td>6 3/16</td>
                      <td>157.2</td>
                      <td>6 3/16</td>

                      <td>157.2</td>
                    </tr>

                    <tr>
                      <td>D1</td>

                      <td>7 1/2</td>
                      <td>190</td>

                      <td>7 7/8</td>
                      <td>200</td>

                      <td>7 7/8</td>
                      <td>200</td>

                      <td>8 1/2</td>
                      <td>215.9</td>

                      <td>9 1/4</td>
                      <td>235</td>

                      <td>9 1/2</td>
                      <td>241</td>
                      <td>10 3/4</td>

                      <td>273</td>
                    </tr>

                    <tr>
                      <td>n</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                    </tr>

                    <tr>
                      <td>d</td>

                      <td>4-Mar</td>
                      <td>19</td>

                      <td>8-Jul</td>
                      <td>22.2</td>

                      <td>1</td>
                      <td>25.4</td>

                      <td>1</td>
                      <td>25.4</td>

                      <td>1 1/4</td>
                      <td>31.8</td>

                      <td>1 3/8</td>
                      <td>34.9</td>
                      <td>1 5/8</td>

                      <td>41.3</td>
                    </tr>

                    <tr>
                      <th rowSpan={7}>5</th>
                    </tr>

                    <tr>
                      <td>A</td>

                      <td>10</td>
                      <td>254</td>

                      <td>11</td>
                      <td>279.4</td>

                      <td>11</td>
                      <td>279.4</td>

                      <td>13</td>
                      <td>330.2</td>

                      <td>13 3/4</td>
                      <td>349</td>

                      <td>14 3/4</td>
                      <td>375</td>
                      <td>16 1/2</td>

                      <td>419</td>
                    </tr>
                    <tr>
                      <td>b</td>

                      <td>1 5/16</td>
                      <td>23.8</td>

                      <td>13/8</td>
                      <td>34.9</td>

                      <td>1 1/2</td>
                      <td>38.1</td>

                      <td>1 3/4</td>
                      <td>44.4</td>

                      <td>2</td>
                      <td>50.8</td>

                      <td>2 7/8</td>
                      <td>73</td>
                      <td>3 5/8</td>

                      <td>92.1</td>
                    </tr>
                    <tr>
                      <td>D2</td>

                      <td>7 5/16</td>
                      <td>185.7</td>

                      <td>7 5/16</td>
                      <td>185.7</td>

                      <td>7 5/16</td>
                      <td>185.7</td>

                      <td>7 5/16</td>
                      <td>185.7</td>

                      <td>7 5/16</td>
                      <td>185.7</td>

                      <td>7 5/16</td>
                      <td>185.7</td>
                      <td>7 5/16</td>

                      <td>185.7</td>
                    </tr>
                    <tr>
                      <td>D1</td>

                      <td>8 1/2</td>
                      <td>215.9</td>

                      <td>9 1/4</td>
                      <td>234.9</td>

                      <td>9 1/4</td>
                      <td>234.9</td>

                      <td>10 1/2</td>
                      <td>266.7</td>

                      <td>11</td>
                      <td>279</td>

                      <td>11 1/2</td>
                      <td>292</td>
                      <td>12 3/4</td>

                      <td>324</td>
                    </tr>
                    <tr>
                      <td>n</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                      <td>8</td>
                      <td>8</td>

                      <td>8</td>
                    </tr>
                    <tr>
                      <td>d</td>

                      <td>8-Jul</td>
                      <td>22.2</td>

                      <td>8-Jul</td>
                      <td>22.2</td>

                      <td>1</td>
                      <td>25.4</td>

                      <td>1 1/8</td>
                      <td>28.6</td>

                      <td>1 3/8</td>
                      <td>34.9</td>

                      <td>1 5/8</td>
                      <td>41.3</td>
                      <td>1 7/8</td>

                      <td>47.6</td>
                    </tr>

                    <tr>
                      <th rowSpan={7}>6</th>
                    </tr>

                    <tr>
                      <td>A</td>

                      <td>11</td>
                      <td>279</td>

                      <td>12 1/2</td>
                      <td>317.5</td>

                      <td>12 1/2</td>
                      <td>317.5</td>

                      <td>14</td>
                      <td>355.6</td>

                      <td>15</td>
                      <td>381</td>

                      <td>15 1/2</td>
                      <td>394</td>
                      <td>19</td>

                      <td>483</td>
                    </tr>
                    <tr>
                      <td>b</td>

                      <td>1</td>
                      <td>25.4</td>

                      <td>17/16</td>
                      <td>36.5</td>

                      <td>1 5/8</td>
                      <td>41.3</td>

                      <td>1 7/8</td>
                      <td>47.6</td>

                      <td>2 3/16</td>
                      <td>55.6</td>

                      <td>3 1/4</td>
                      <td>82.6</td>
                      <td>4 1/4</td>

                      <td>108</td>
                    </tr>
                    <tr>
                      <td>D2</td>

                      <td>8 1/2</td>
                      <td>216</td>

                      <td>8 1/2</td>
                      <td>215.9</td>

                      <td>8 1/2</td>
                      <td>215.9</td>

                      <td>8 1/2</td>
                      <td>215.9</td>

                      <td>8 1/2</td>
                      <td>215.9</td>

                      <td>8 1/2</td>
                      <td>215.9</td>
                      <td>8 1/2</td>

                      <td>216</td>
                    </tr>
                    <tr>
                      <td>D1</td>

                      <td>9 1/2</td>
                      <td>241</td>

                      <td>10 5/8</td>
                      <td>269.9</td>

                      <td>10 5/8</td>
                      <td>269.9</td>

                      <td>11 1/2</td>
                      <td>292.1</td>

                      <td>12 1/2</td>
                      <td>318</td>

                      <td>12 1/2</td>
                      <td>318</td>
                      <td>14 1/2</td>

                      <td>368</td>
                    </tr>
                    <tr>
                      <td>n</td>

                      <td>8</td>
                      <td>8</td>

                      <td>12</td>
                      <td>12</td>

                      <td>12</td>
                      <td>12</td>

                      <td>12</td>
                      <td>12</td>

                      <td>12</td>
                      <td>12</td>

                      <td>12</td>
                      <td>12</td>
                      <td>8</td>

                      <td>8</td>
                    </tr>
                    <tr>
                      <td>d</td>

                      <td>8-Jul</td>
                      <td>22.2</td>

                      <td>8-Jul</td>
                      <td>22.2</td>

                      <td>1</td>
                      <td>25.4</td>

                      <td>1 1/8</td>
                      <td>28.6</td>

                      <td>1 1/4</td>
                      <td>31.8</td>

                      <td>1 1/2</td>
                      <td>38.1</td>
                      <td>2 1/8</td>

                      <td>54</td>
                    </tr>

                    <tr>
                      <th rowSpan={7}>8</th>
                    </tr>

                    <tr>
                      <td>A</td>

                      <td>13 1/2</td>
                      <td>342.9</td>

                      <td>15</td>
                      <td>381</td>

                      <td>15</td>
                      <td>381</td>

                      <td>16 1/2</td>
                      <td>419</td>

                      <td>18 1/2</td>
                      <td>470</td>

                      <td>19</td>
                      <td>482.6</td>
                      <td>21 3/4</td>

                      <td>552</td>
                    </tr>
                    <tr>
                      <td>b</td>

                      <td>1 1/8</td>
                      <td>28.6</td>

                      <td>1 5/8</td>
                      <td>41.3</td>

                      <td>1 7/8</td>
                      <td>47.6</td>

                      <td>2 3/16</td>
                      <td>55.6</td>

                      <td>2 1/2</td>
                      <td>63.5</td>

                      <td>3 5/8</td>
                      <td>92.1</td>
                      <td>5</td>

                      <td>127</td>
                    </tr>
                    <tr>
                      <td>D2</td>

                      <td>10 5/8</td>
                      <td>269.9</td>

                      <td>10 5/8</td>
                      <td>269.9</td>

                      <td>10 5/8</td>
                      <td>269.9</td>

                      <td>10 5/8</td>
                      <td>269.9</td>

                      <td>10 5/8</td>
                      <td>269.9</td>

                      <td>10 5/8</td>
                      <td>269.9</td>
                      <td>10 5/8</td>

                      <td>269.9</td>
                    </tr>
                    <tr>
                      <td>D1</td>

                      <td>11 3/4</td>
                      <td>298.4</td>

                      <td>13</td>
                      <td>330.2</td>

                      <td>13</td>
                      <td>330.2</td>

                      <td>13 3/4</td>
                      <td>349.2</td>

                      <td>15 1/2</td>
                      <td>394.2</td>

                      <td>15 1/2</td>
                      <td>394.2</td>
                      <td>17 1/4</td>

                      <td>438</td>
                    </tr>
                    <tr>
                      <td>n</td>

                      <td>8</td>
                      <td>8</td>

                      <td>12</td>
                      <td>12</td>

                      <td>12</td>
                      <td>12</td>

                      <td>12</td>
                      <td>12</td>

                      <td>12</td>
                      <td>12</td>

                      <td>12</td>
                      <td>12</td>
                      <td>12</td>

                      <td>12</td>
                    </tr>
                    <tr>
                      <td>d</td>

                      <td>8-Jul</td>
                      <td>22.2</td>

                      <td>1</td>
                      <td>25.4</td>

                      <td>1 1/8</td>
                      <td>28.6</td>

                      <td>1 1/4</td>
                      <td>31.8</td>

                      <td>1 1/2</td>
                      <td>38.1</td>

                      <td>1 3/4</td>
                      <td>44.5</td>
                      <td>2 1/8</td>

                      <td>54</td>
                    </tr>

                    <tr>
                      <th rowSpan={7}>10</th>
                    </tr>

                    <tr>
                      <td>A</td>

                      <td>16</td>
                      <td>406.4</td>

                      <td>17 1/2</td>
                      <td>444.5</td>

                      <td>17 1/2</td>
                      <td>444.5</td>

                      <td>20</td>
                      <td>508</td>

                      <td>21 1/2</td>
                      <td>546</td>

                      <td>23</td>
                      <td>584</td>
                      <td>26 1/2</td>

                      <td>673</td>
                    </tr>
                    <tr>
                      <td>b</td>

                      <td>1 3/16</td>
                      <td>30.2</td>

                      <td>1 7/8</td>
                      <td>47.6</td>

                      <td>2 1/8</td>
                      <td>54</td>

                      <td>2 1/2</td>
                      <td>63.5</td>

                      <td>2 3/4</td>
                      <td>69.8</td>

                      <td>4 1/4</td>
                      <td>108</td>
                      <td>6 1/2</td>

                      <td>165</td>
                    </tr>
                    <tr>
                      <td>D2</td>

                      <td>12 3/4</td>
                      <td>323.8</td>

                      <td>12 3/4</td>
                      <td>323.8</td>

                      <td>12 3/4</td>
                      <td>323.8</td>

                      <td>12 3/4</td>
                      <td>323.8</td>

                      <td>12 3/4</td>
                      <td>323.8</td>

                      <td>12 3/4</td>
                      <td>323.8</td>
                      <td>12 3/4</td>

                      <td>323.8</td>
                    </tr>
                    <tr>
                      <td>D1</td>

                      <td>14 1/4</td>
                      <td>361.9</td>

                      <td>15 1/4</td>
                      <td>387.4</td>

                      <td>15 1/4</td>
                      <td>387.4</td>

                      <td>17</td>
                      <td>431.8</td>

                      <td>18 1/2</td>
                      <td>470</td>

                      <td>19</td>
                      <td>482.6</td>
                      <td>21 1/4</td>

                      <td>540</td>
                    </tr>
                    <tr>
                      <td>n</td>

                      <td>12</td>
                      <td>12</td>

                      <td>16</td>
                      <td>16</td>

                      <td>16</td>
                      <td>16</td>

                      <td>16</td>
                      <td>16</td>

                      <td>16</td>
                      <td>16</td>

                      <td>12</td>
                      <td>12</td>
                      <td>12</td>

                      <td>12</td>
                    </tr>
                    <tr>
                      <td>d</td>

                      <td>1</td>
                      <td>25.4</td>

                      <td>1 1/8</td>
                      <td>28.6</td>

                      <td>1 1/4</td>
                      <td>31.8</td>

                      <td>1 3/8</td>
                      <td>34.9</td>

                      <td>1 1/2</td>
                      <td>38.1</td>

                      <td>2</td>
                      <td>50.8</td>
                      <td>2 5/8</td>

                      <td>66</td>
                    </tr>
                  </tbody>
                </Table>
              </motion.div>
            </motion.div>
          ) : (
            ''
          )}
          {/* Flanges part 2 end */}
          {props.tablefittingIfTrueExtra === 'true' ? (
            <motion.div
              variants={textVariantsSlow}
              initial="initial"
              whileInView="animate"
              ref={ref}
              animate={isInView && 'animate'}
              className="my-4"
            >
              <motion.div className="px-lg-5 px-0">
                <h3>Stainless Steel Forged Fittings Chemical Composition</h3>
                <p className="paraSizeEx">
                  The chemical reactivity of stainless steel Forged Fittings is
                  essential since it impacts the fitting’s ability to resist
                  corrosion and other characteristics.
                </p>
                <div className="py-2 bg-primary">
                  <h4 className="text-white my-auto text-center">
                    Chemical Composition
                  </h4>
                </div>
                <Table
                  bordered
                  responsive="md"
                  style={{ border: '1px solid #000' }}
                >
                  <tbody className="text-center">
                    <tr>
                      <th className="table-th-width">Type</th>
                      <th style={{ width: '400px' }}>C</th>
                      <th>Mn</th>
                      <th>P</th>
                      <th>S</th>
                      <th>Si</th>
                      <th>Cr</th>
                      <th>Ni</th>
                      <th>Mo</th>
                    </tr>

                    <tr>
                      <td>304*</td>
                      <td>0.08</td>
                      <td>2</td>
                      <td>0.045</td>
                      <td>0.03</td>
                      <td>1</td>
                      <td>18.00/20.00</td>
                      <td>8.00/10.50</td>
                      <td>–</td>
                    </tr>

                    <tr>
                      <td>304L*</td>
                      <td>0.03</td>
                      <td>2</td>
                      <td>0.045</td>
                      <td>0.03</td>
                      <td>1</td>
                      <td>18.00/20.00</td>
                      <td>8.00/12.00</td>
                      <td>–</td>
                    </tr>

                    <tr>
                      <td>316*</td>
                      <td>0.08</td>
                      <td>2</td>
                      <td>0.045</td>
                      <td>0.03</td>
                      <td>1</td>
                      <td>16.00/18.00</td>
                      <td>10.00/14.00</td>
                      <td>2.00/3.00</td>
                    </tr>

                    <tr>
                      <td>316L*</td>
                      <td>0.03</td>
                      <td>2</td>
                      <td>0.045</td>
                      <td>0.03</td>
                      <td>1</td>
                      <td>16.00/18.00</td>
                      <td>10.00/14.00</td>
                      <td>2.00/3.00</td>
                    </tr>

                    <tr>
                      <td>321</td>
                      <td>0.08</td>
                      <td>2</td>
                      <td>0.04</td>
                      <td>0.03</td>
                      <td>1</td>
                      <td>17.00/19.00</td>
                      <td>9.00/12.00</td>
                      <td>0.75/0.75</td>
                    </tr>
                  </tbody>
                </Table>
              </motion.div>
            </motion.div>
          ) : (
            ''
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductsDetails;
