import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSolidEditAlt } from "react-icons/bi";
import { IoRefreshSharp } from "react-icons/io5";
import { RiComputerLine, RiGlobalLine } from "react-icons/ri";
import fontStyles from "../data/fontStyles";
import fonts from "../data/fonts";
import textDecorations from "../data/textDecoration";
import textTransform from "../data/textTransfrom";
import styles from "./TypographyEditor.module.css";

function TypographyEditor({ propreties, setPropreties }) {
  // Destructuring all properties
  const {
    font,
    size,
    weight,
    style,
    decoration,
    transform,
    lineHeight,
    letterSpacing,
    wordSpacing,
    onClickState,
  } = propreties;

  return (
    <div className={styles.PopupPrentWrapper}>
      <div className={styles.typographyHeader}>
        <p>Typography</p>
        <div className={styles.editTypographyTools}>
          <RiGlobalLine className={styles.globalIcon} />
          <BiSolidEditAlt
            className={styles.editTypographyIcon}
            onClick={() =>
              setPropreties({
                ...propreties,
                onClickState: {
                  ...onClickState,
                  isOpenEditor: !onClickState?.isOpenEditor,
                },
              })
            }
          />
          {onClickState?.isOpenEditor && (
            <div className={styles.typographyEditor}>
              <div className={styles.typographyPopupWrapper}>
                <div className={styles.typrographyPopupHeader}>
                  <p className={styles.typography}>Typography</p>
                  <div className={styles.typographyToolsWrapper}>
                    <p className={styles.tool}>
                      <IoRefreshSharp className={styles.toolsIcon} />
                    </p>
                    <p className={styles.tool}>
                      <AiOutlinePlus className={styles.toolsIcon} />
                    </p>
                  </div>
                </div>
                <div className={styles.typographyWrapper}>
                  {/*  Font family properties */}
                  <div className={styles.typographyPropertiesWrapper}>
                    <span className={styles.propName}>Family</span>
                    <div className={styles.selectValueWrapper}>
                      <div
                        className={styles.triangleAndSelectedValue}
                        onClick={() => {
                          setPropreties({
                            ...propreties,
                            onClickState: {
                              ...onClickState,
                              isOpenFontFamuly: !onClickState?.isOpenFontFamuly,
                            },
                          });
                        }}
                      >
                        <span className={styles.showSelectedValue}>
                          {font?.displayName}
                        </span>
                        <span className="triangle"></span>
                      </div>

                      <div
                        className={`${styles.valueWrapper} ${
                          onClickState?.isOpenFontFamuly &&
                          styles.activeValueWrapper
                        }`}
                      >
                        {fonts?.map((font) => {
                          return (
                            <span
                              className={`${styles.value} ${
                                font?.displayName === font?.name &&
                                styles.selectedValue
                              }`}
                              onClick={(e) => {
                                setPropreties({
                                  ...propreties,
                                  font: {
                                    ...font,
                                    displayName: font?.name,
                                    value: font?.value,
                                  },
                                });
                              }}
                            >
                              {font?.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/*  Font size properties */}
                  <div className={styles.typographyRangePropertiesWrapper}>
                    <div className={styles.rangePropertiesHeader}>
                      <div className={styles.propretyName}>
                        <span>Size</span>
                        <RiComputerLine className={styles.desktopIcon} />
                      </div>
                      <select
                        name=""
                        id=""
                        className={styles.pixelType}
                        value={size?.unit || "px"}
                        onChange={(e) =>
                          setPropreties({
                            ...propreties,
                            size: {
                              ...size,
                              unit: e.target.value,
                            },
                          })
                        }
                      >
                        <option value={"px"}>px</option>
                        <option value={"rem"}>rem</option>
                        <option value={"em"}>em</option>
                      </select>
                    </div>

                    <div className={styles.rangeWrapper}>
                      <input
                        type="range"
                        name=""
                        id=""
                        className={styles.range}
                        max={100}
                        value={size?.value || 0}
                        onChange={(e) =>
                          setPropreties({
                            ...propreties,
                            size: {
                              ...size,
                              value: e.target.value,
                            },
                          })
                        }
                      />

                      <span className={styles.rangeValue}>{size?.value}</span>
                    </div>
                  </div>

                  {/*  Font weight properties */}
                  <div className={styles.typographyPropertiesWrapper}>
                    <span className={styles.propName}>weight</span>
                    <div className={styles.selectValueWrapper}>
                      <div
                        className={styles.triangleAndSelectedValue}
                        onClick={() => {
                          setPropreties({
                            ...propreties,
                            onClickState: {
                              ...onClickState,
                              isOpenWeight: !onClickState?.isOpenWeight,
                            },
                          });
                        }}
                      >
                        <span className={styles.showSelectedValue}>
                          {!weight ? "Default" : weight}
                        </span>
                        <span className="triangle"></span>
                      </div>

                      <div
                        className={`${styles.valueWrapper} ${
                          onClickState?.isOpenWeight &&
                          styles.activeValueWrapper
                        }`}
                      >
                        {fonts?.map((font) => {
                          if (propreties?.font?.displayName === font?.name) {
                            return font?.weight?.map((weight) => {
                              return (
                                <span
                                  className={`${styles.value} ${
                                    parseInt(propreties?.weight) ===
                                      parseInt(weight) && styles.selectedValue
                                  }`}
                                  onClick={() =>
                                    setPropreties({
                                      ...propreties,
                                      weight,
                                    })
                                  }
                                >
                                  {weight}
                                </span>
                              );
                            });
                          } else {
                            return;
                          }
                        })}
                      </div>
                    </div>
                  </div>

                  {/*  Text transfrom properties */}
                  <div className={styles.typographyPropertiesWrapper}>
                    <span className={styles.propName}>Transform</span>
                    <div className={styles.selectValueWrapper}>
                      <div
                        className={styles.triangleAndSelectedValue}
                        onClick={() => {
                          setPropreties({
                            ...propreties,
                            onClickState: {
                              ...onClickState,
                              isOpenTransform: !onClickState?.isOpenTransform,
                            },
                          });
                        }}
                      >
                        <span className={styles.showSelectedValue}>
                          {transform === "initial" ? "Default" : transform}
                        </span>
                        <span className="triangle"></span>
                      </div>

                      <div
                        className={`${styles.valueWrapper} ${
                          onClickState?.isOpenTransform &&
                          styles.activeValueWrapper
                        }`}
                      >
                        {textTransform?.map((transform) => {
                          return (
                            <span
                              className={`${styles.value} ${
                                propreties?.transform === transform &&
                                styles.selectedValue
                              }`}
                              onClick={(e) => {
                                setPropreties({
                                  ...propreties,
                                  transform:
                                    transform === "Default"
                                      ? "initial"
                                      : transform,
                                });
                              }}
                            >
                              {transform}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/*  Text Decoration properties */}
                  <div className={styles.typographyPropertiesWrapper}>
                    <span className={styles.propName}>Decoration</span>
                    <div className={styles.selectValueWrapper}>
                      <div
                        className={styles.triangleAndSelectedValue}
                        onClick={() => {
                          setPropreties({
                            ...propreties,
                            onClickState: {
                              ...onClickState,
                              isOpenDecoration: !onClickState?.isOpenDecoration,
                            },
                          });
                        }}
                      >
                        <span className={styles.showSelectedValue}>
                          {decoration === "initial" ? "Default" : decoration}
                        </span>
                        <span className="triangle"></span>
                      </div>

                      <div
                        className={`${styles.valueWrapper} ${
                          onClickState?.isOpenDecoration &&
                          styles.activeValueWrapper
                        }`}
                      >
                        {textDecorations?.map((decoratopnProp) => {
                          return (
                            <span
                              className={`${styles.value} ${
                                decoration === decoratopnProp &&
                                styles.selectedValue
                              }`}
                              onClick={() =>
                                setPropreties({
                                  ...propreties,
                                  decoration:
                                    decoratopnProp === "Default"
                                      ? "initial"
                                      : decoratopnProp,
                                })
                              }
                            >
                              {decoratopnProp}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/*  Font style properties */}
                  <div className={styles.typographyPropertiesWrapper}>
                    <span className={styles.propName}>Style</span>
                    <div className={styles.selectValueWrapper}>
                      <div
                        className={styles.triangleAndSelectedValue}
                        onClick={() => {
                          setPropreties({
                            ...propreties,
                            onClickState: {
                              ...onClickState,
                              isOpenStyle: !onClickState?.isOpenStyle,
                            },
                          });
                        }}
                      >
                        <span className={styles.showSelectedValue}>
                          {style === "initial" ? "Default" : style}
                        </span>
                        <span className="triangle"></span>
                      </div>

                      <div
                        className={`${styles.valueWrapper} ${
                          onClickState?.isOpenStyle && styles.activeValueWrapper
                        }`}
                      >
                        {fontStyles?.map((style) => {
                          return (
                            <span
                              className={`${styles.value} ${
                                propreties?.style === style &&
                                styles.selectedValue
                              }`}
                              onClick={() =>
                                setPropreties({
                                  ...propreties,
                                  style:
                                    style === "Default" ? "initial" : style,
                                })
                              }
                            >
                              {style}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/*  Line height properties */}
                  <div className={styles.typographyRangePropertiesWrapper}>
                    <div className={styles.rangePropertiesHeader}>
                      <div className={styles.propretyName}>
                        <span className={styles.propName}>Line-Height</span>
                        <RiComputerLine className={styles.desktopIcon} />
                      </div>
                      <select
                        name=""
                        id=""
                        className={styles.pixelType}
                        value={lineHeight?.unit || "px"}
                        onChange={(e) =>
                          setPropreties({
                            ...propreties,
                            lineHeight: {
                              ...lineHeight,
                              unit: e.target.value,
                            },
                          })
                        }
                      >
                        <option value="px">px</option>
                        <option value="rem">rem</option>
                        <option value="em">em</option>
                      </select>
                    </div>

                    <div className={styles.rangeWrapper}>
                      <input
                        type="range"
                        name=""
                        id=""
                        className={styles.range}
                        max={100}
                        value={lineHeight?.value || 0}
                        onChange={(e) =>
                          setPropreties({
                            ...propreties,
                            lineHeight: {
                              ...lineHeight,
                              value: e.target.value,
                            },
                          })
                        }
                      />

                      <span className={styles.rangeValue}>
                        {lineHeight?.value}
                      </span>
                    </div>
                  </div>

                  {/*  Letter spacing properties */}
                  <div className={styles.typographyRangePropertiesWrapper}>
                    <div className={styles.rangePropertiesHeader}>
                      <div className={styles.propretyName}>
                        <span>Letter Spacing</span>
                        <RiComputerLine className={styles.desktopIcon} />
                      </div>
                      <select
                        name=""
                        id=""
                        className={styles.pixelType}
                        value={letterSpacing?.unit || "px"}
                        onChange={(e) =>
                          setPropreties({
                            ...propreties,
                            letterSpacing: {
                              ...letterSpacing,
                              unit: e.target.value,
                            },
                          })
                        }
                      >
                        <option value="px">px</option>
                        <option value="rem">rem</option>
                        <option value="em">em</option>
                      </select>
                    </div>

                    <div className={styles.rangeWrapper}>
                      <input
                        type="range"
                        name=""
                        id=""
                        className={styles.range}
                        max={100}
                        value={letterSpacing?.value || 0}
                        onChange={(e) =>
                          setPropreties({
                            ...propreties,
                            letterSpacing: {
                              ...letterSpacing,
                              value: e.target.value,
                            },
                          })
                        }
                      />

                      <span className={styles.rangeValue}>
                        {letterSpacing?.value}
                      </span>
                    </div>
                  </div>

                  {/*  word spacing properties */}
                  <div className={styles.typographyRangePropertiesWrapper}>
                    <div className={styles.rangePropertiesHeader}>
                      <div className={styles.propretyName}>
                        <span>Word Spacing</span>
                        <RiComputerLine className={styles.desktopIcon} />
                      </div>
                      <select
                        name=""
                        id=""
                        className={styles.pixelType}
                        value={wordSpacing?.unit || "px"}
                        onChange={(e) =>
                          setPropreties({
                            ...propreties,
                            wordSpacing: {
                              ...wordSpacing,
                              unit: e.target.value,
                            },
                          })
                        }
                      >
                        <option value="px">px</option>
                        <option value="rem">rem</option>
                        <option value="em">em</option>
                      </select>
                    </div>

                    <div className={styles.rangeWrapper}>
                      <input
                        type="range"
                        name=""
                        id=""
                        className={styles.range}
                        max={100}
                        value={wordSpacing?.value || 0}
                        onChange={(e) =>
                          setPropreties({
                            ...propreties,
                            wordSpacing: {
                              ...wordSpacing,
                              value: e.target.value,
                            },
                          })
                        }
                      />

                      <span className={styles.rangeValue}>
                        {wordSpacing?.value}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TypographyEditor;
