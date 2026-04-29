import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { Div } from "mendix/widgets/web/Div";
import * as ImageWidgetModule from "/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_TopBar.js";

const { $Div, $Text, $Image, $ActionButton } = asPluginWidgets({ Div, Text, Image, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MyFirstModule.Home_Web.layoutGrid3"
        $widgetId="p.MyFirstModule.Home_Web.layoutGrid3"
        class={"mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fixed container"}
        style={{
            "--layoutgrid-row-gap": "var(--spacing-large)"
        }}
        content={[
            <$Div key="p.MyFirstModule.Home_Web.layoutGrid3$row0"
                $widgetId="p.MyFirstModule.Home_Web.layoutGrid3$row0"
                class={"row"}
                content={[
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid3$row0$column0"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid3$row0$column0"
                        class={"col-lg col-md col"}
                        content={[
                            <$Text key="p.MyFirstModule.Home_Web.text1"
                                $widgetId="p.MyFirstModule.Home_Web.text1"
                                class={"mx-name-text1"}
                                caption={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "Welcome to your homepage" }, "args": {} }
                                })}
                                renderMode={"h1"} />
                        ]} />
                ]} />,
            <$Div key="p.MyFirstModule.Home_Web.layoutGrid3$row1"
                $widgetId="p.MyFirstModule.Home_Web.layoutGrid3$row1"
                class={"row"}
                content={[
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid3$row1$column0"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid3$row1$column0"
                        class={"col-lg col-md col"}
                        content={[
                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid1"
                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid1"
                                class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-outer-top-medium spacing-outer-bottom-medium"}
                                content={[
                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row0"
                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row0"
                                        class={"row align-children-center"}
                                        content={[
                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row0$column0"
                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row0$column0"
                                                class={"col-lg-auto col-md col"}
                                                content={[
                                                    <$Image key="p.MyFirstModule.Home_Web.image8"
                                                        $widgetId="p.MyFirstModule.Home_Web.image8"
                                                        datasource={"image"}
                                                        imageObject={WebStaticImageProperty({
                                                            "image": { "uri": "img/MyFirstModule$Images$_1.png" }
                                                        })}
                                                        imageUrl={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        isBackgroundImage={false}
                                                        onClickType={"action"}
                                                        alternativeText={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        widthUnit={"pixels"}
                                                        width={36}
                                                        heightUnit={"pixels"}
                                                        height={36}
                                                        iconSize={14}
                                                        displayAs={"fullImage"}
                                                        responsive={true}
                                                        minHeightUnit={"none"}
                                                        minHeight={0}
                                                        maxHeightUnit={"none"}
                                                        maxHeight={0}
                                                        class={"mx-name-image8"} />
                                                ]} />,
                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row0$column1"
                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row0$column1"
                                                class={"col-lg col-md col"}
                                                content={[
                                                    <$Text key="p.MyFirstModule.Home_Web.text23"
                                                        $widgetId="p.MyFirstModule.Home_Web.text23"
                                                        class={"mx-name-text23 spacing-outer-bottom-none"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Define and organize your data" }, "args": {} }
                                                        })}
                                                        renderMode={"h2"} />
                                                ]} />
                                        ]} />,
                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row1"
                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row1"
                                        class={"row"}
                                        content={[
                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row1$column0"
                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row1$column0"
                                                class={"col-lg col-md col"}
                                                content={[
                                                    <$Text key="p.MyFirstModule.Home_Web.text3"
                                                        $widgetId="p.MyFirstModule.Home_Web.text3"
                                                        class={"mx-name-text3 text-detail"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Start by setting up your Domain Model, where you define the data structure for your app. This includes creating entities, attributes, and associations. " }, "args": {} }
                                                        })}
                                                        renderMode={"span"} />
                                                ]} />
                                        ]} />,
                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row2"
                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row2"
                                        class={"row cards"}
                                        style={{
                                            "--layoutgrid-column-gap": "var(--spacing-large)"
                                        }}
                                        content={[
                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid1$row2$column0"
                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid1$row2$column0"
                                                class={"col-lg-4 col-md col flex-column"}
                                                content={[
                                                    <$Text key="p.MyFirstModule.Home_Web.text21"
                                                        $widgetId="p.MyFirstModule.Home_Web.text21"
                                                        class={"mx-name-text21"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Domain model" }, "args": {} }
                                                        })}
                                                        renderMode={"h4"} />,
                                                    <$Image key="p.MyFirstModule.Home_Web.image7"
                                                        $widgetId="p.MyFirstModule.Home_Web.image7"
                                                        datasource={"image"}
                                                        imageObject={WebStaticImageProperty({
                                                            "image": { "uri": "img/MyFirstModule$Images$DomainModel.png" }
                                                        })}
                                                        imageUrl={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        isBackgroundImage={false}
                                                        onClickType={"action"}
                                                        alternativeText={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        widthUnit={"auto"}
                                                        width={100}
                                                        heightUnit={"auto"}
                                                        height={100}
                                                        iconSize={14}
                                                        displayAs={"fullImage"}
                                                        responsive={true}
                                                        minHeightUnit={"none"}
                                                        minHeight={0}
                                                        maxHeightUnit={"none"}
                                                        maxHeight={0}
                                                        class={"mx-name-image7"} />,
                                                    <$Text key="p.MyFirstModule.Home_Web.text22"
                                                        $widgetId="p.MyFirstModule.Home_Web.text22"
                                                        class={"mx-name-text22 text-detail"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "A well-structured Domain Model forms the foundation for the components and pages you'll build next." }, "args": {} }
                                                        })}
                                                        renderMode={"p"} />,
                                                    <$ActionButton key="p.MyFirstModule.Home_Web.actionButton4"
                                                        $widgetId="p.MyFirstModule.Home_Web.actionButton4"
                                                        buttonId={"p.MyFirstModule.Home_Web.actionButton4"}
                                                        class={"mx-name-actionButton4"}
                                                        renderType={"link"}
                                                        role={"button"}
                                                        buttonClass={"btn-default"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Learn more" }, "args": {} }
                                                        })}
                                                        tooltip={TextProperty({
                                                            "value": ""
                                                        })}
                                                        icon={WebIconProperty({
                                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-arrow-narrow-right" }
                                                        })}
                                                        action={ActionProperty({
                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mendix.com/refguide/modeling/" }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />
                                        ]} />
                                ]} />
                        ]} />
                ]} />,
            <$Div key="p.MyFirstModule.Home_Web.layoutGrid3$row2"
                $widgetId="p.MyFirstModule.Home_Web.layoutGrid3$row2"
                class={"row"}
                content={[
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid3$row2$column0"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid3$row2$column0"
                        class={"col-lg col-md col"}
                        content={[
                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid5"
                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid5"
                                class={"mx-name-layoutGrid5 mx-layoutgrid mx-layoutgrid-fluid spacing-outer-bottom-medium spacing-outer-top-medium"}
                                content={[
                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid5$row0"
                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid5$row0"
                                        class={"row align-children-center"}
                                        content={[
                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid5$row0$column0"
                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid5$row0$column0"
                                                class={"col-lg-auto col-md col"}
                                                content={[
                                                    <$Image key="p.MyFirstModule.Home_Web.image13"
                                                        $widgetId="p.MyFirstModule.Home_Web.image13"
                                                        datasource={"image"}
                                                        imageObject={WebStaticImageProperty({
                                                            "image": { "uri": "img/MyFirstModule$Images$_2.png" }
                                                        })}
                                                        imageUrl={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        isBackgroundImage={false}
                                                        onClickType={"action"}
                                                        alternativeText={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        widthUnit={"pixels"}
                                                        width={36}
                                                        heightUnit={"pixels"}
                                                        height={36}
                                                        iconSize={14}
                                                        displayAs={"fullImage"}
                                                        responsive={true}
                                                        minHeightUnit={"none"}
                                                        minHeight={0}
                                                        maxHeightUnit={"none"}
                                                        maxHeight={0}
                                                        class={"mx-name-image13"} />
                                                ]} />,
                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid5$row0$column1"
                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid5$row0$column1"
                                                class={"col-lg col-md col"}
                                                content={[
                                                    <$Text key="p.MyFirstModule.Home_Web.text31"
                                                        $widgetId="p.MyFirstModule.Home_Web.text31"
                                                        class={"mx-name-text31 spacing-outer-bottom-none"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Add and connect widgets to your page" }, "args": {} }
                                                        })}
                                                        renderMode={"h2"} />
                                                ]} />
                                        ]} />,
                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid5$row1"
                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid5$row1"
                                        class={"row"}
                                        content={[
                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid5$row1$column0"
                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid5$row1$column0"
                                                class={"col-lg col-md col"}
                                                content={[
                                                    <$Text key="p.MyFirstModule.Home_Web.text5"
                                                        $widgetId="p.MyFirstModule.Home_Web.text5"
                                                        class={"mx-name-text5 text-detail"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "With your data in place, start building your page by dragging widgets from the toolbox onto the canvas. Connect them to your data to make your app interactive and dynamic." }, "args": {} }
                                                        })}
                                                        renderMode={"p"} />,
                                                    <$Text key="p.MyFirstModule.Home_Web.text2"
                                                        $widgetId="p.MyFirstModule.Home_Web.text2"
                                                        class={"mx-name-text2 text-detail"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Here are a few commonly used widgets:" }, "args": {} }
                                                        })}
                                                        renderMode={"span"} />
                                                ]} />
                                        ]} />,
                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid5$row2"
                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid5$row2"
                                        class={"row cards"}
                                        style={{
                                            "--layoutgrid-column-gap": "var(--spacing-large)"
                                        }}
                                        content={[
                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid5$row2$column0"
                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid5$row2$column0"
                                                class={"col-lg col-md col flex-column"}
                                                content={[
                                                    <$Text key="p.MyFirstModule.Home_Web.text32"
                                                        $widgetId="p.MyFirstModule.Home_Web.text32"
                                                        class={"mx-name-text32"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
                                                        })}
                                                        renderMode={"h4"} />,
                                                    <$Image key="p.MyFirstModule.Home_Web.image14"
                                                        $widgetId="p.MyFirstModule.Home_Web.image14"
                                                        datasource={"image"}
                                                        imageObject={WebStaticImageProperty({
                                                            "image": { "uri": "img/MyFirstModule$Images$combobox.png" }
                                                        })}
                                                        imageUrl={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        isBackgroundImage={false}
                                                        onClickType={"action"}
                                                        alternativeText={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        widthUnit={"auto"}
                                                        width={100}
                                                        heightUnit={"auto"}
                                                        height={100}
                                                        iconSize={14}
                                                        displayAs={"fullImage"}
                                                        responsive={true}
                                                        minHeightUnit={"none"}
                                                        minHeight={0}
                                                        maxHeightUnit={"none"}
                                                        maxHeight={0}
                                                        class={"mx-name-image14"} />,
                                                    <$Text key="p.MyFirstModule.Home_Web.text33"
                                                        $widgetId="p.MyFirstModule.Home_Web.text33"
                                                        class={"mx-name-text33 text-detail"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Let users select one or multiple options from a static list, an enumeration, or dynamic data - ideal for input forms." }, "args": {} }
                                                        })}
                                                        renderMode={"p"} />,
                                                    <$ActionButton key="p.MyFirstModule.Home_Web.actionButton8"
                                                        $widgetId="p.MyFirstModule.Home_Web.actionButton8"
                                                        buttonId={"p.MyFirstModule.Home_Web.actionButton8"}
                                                        class={"mx-name-actionButton8"}
                                                        renderType={"link"}
                                                        role={"button"}
                                                        buttonClass={"btn-default"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Learn more" }, "args": {} }
                                                        })}
                                                        tooltip={TextProperty({
                                                            "value": ""
                                                        })}
                                                        icon={WebIconProperty({
                                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-arrow-narrow-right" }
                                                        })}
                                                        action={ActionProperty({
                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mendix.com/appstore/widgets/combobox/" }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />,
                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid5$row2$column1"
                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid5$row2$column1"
                                                class={"col-lg col-md col flex-column"}
                                                content={[
                                                    <$Text key="p.MyFirstModule.Home_Web.text34"
                                                        $widgetId="p.MyFirstModule.Home_Web.text34"
                                                        class={"mx-name-text34"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Data grid 2" }, "args": {} }
                                                        })}
                                                        renderMode={"h4"} />,
                                                    <$Image key="p.MyFirstModule.Home_Web.image15"
                                                        $widgetId="p.MyFirstModule.Home_Web.image15"
                                                        datasource={"image"}
                                                        imageObject={WebStaticImageProperty({
                                                            "image": { "uri": "img/MyFirstModule$Images$dg2.png" }
                                                        })}
                                                        imageUrl={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        isBackgroundImage={false}
                                                        onClickType={"action"}
                                                        alternativeText={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        widthUnit={"auto"}
                                                        width={100}
                                                        heightUnit={"auto"}
                                                        height={100}
                                                        iconSize={14}
                                                        displayAs={"fullImage"}
                                                        responsive={true}
                                                        minHeightUnit={"none"}
                                                        minHeight={0}
                                                        maxHeightUnit={"none"}
                                                        maxHeight={0}
                                                        class={"mx-name-image15"} />,
                                                    <$Text key="p.MyFirstModule.Home_Web.text35"
                                                        $widgetId="p.MyFirstModule.Home_Web.text35"
                                                        class={"mx-name-text35 text-detail"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "A powerful, modern table for displaying data with flexible layouts, sorting, filtering, and styling options." }, "args": {} }
                                                        })}
                                                        renderMode={"p"} />,
                                                    <$ActionButton key="p.MyFirstModule.Home_Web.actionButton9"
                                                        $widgetId="p.MyFirstModule.Home_Web.actionButton9"
                                                        buttonId={"p.MyFirstModule.Home_Web.actionButton9"}
                                                        class={"mx-name-actionButton9"}
                                                        renderType={"link"}
                                                        role={"button"}
                                                        buttonClass={"btn-default"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Learn more" }, "args": {} }
                                                        })}
                                                        tooltip={TextProperty({
                                                            "value": ""
                                                        })}
                                                        icon={WebIconProperty({
                                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-arrow-narrow-right" }
                                                        })}
                                                        action={ActionProperty({
                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mendix.com/appstore/modules/data-grid-2/" }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />,
                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid5$row2$column2"
                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid5$row2$column2"
                                                class={"col-lg col-md col flex-column"}
                                                content={[
                                                    <$Text key="p.MyFirstModule.Home_Web.text36"
                                                        $widgetId="p.MyFirstModule.Home_Web.text36"
                                                        class={"mx-name-text36"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Gallery" }, "args": {} }
                                                        })}
                                                        renderMode={"h4"} />,
                                                    <$Image key="p.MyFirstModule.Home_Web.image16"
                                                        $widgetId="p.MyFirstModule.Home_Web.image16"
                                                        datasource={"image"}
                                                        imageObject={WebStaticImageProperty({
                                                            "image": { "uri": "img/MyFirstModule$Images$gallery.png" }
                                                        })}
                                                        imageUrl={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        isBackgroundImage={false}
                                                        onClickType={"action"}
                                                        alternativeText={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        widthUnit={"auto"}
                                                        width={100}
                                                        heightUnit={"auto"}
                                                        height={100}
                                                        iconSize={14}
                                                        displayAs={"fullImage"}
                                                        responsive={true}
                                                        minHeightUnit={"none"}
                                                        minHeight={0}
                                                        maxHeightUnit={"none"}
                                                        maxHeight={0}
                                                        class={"mx-name-image16"} />,
                                                    <$Text key="p.MyFirstModule.Home_Web.text37"
                                                        $widgetId="p.MyFirstModule.Home_Web.text37"
                                                        class={"mx-name-text37 text-detail"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Present a collection of items or  images in a sleep, responsive grid. Great for product overviews, image galleries, or lists." }, "args": {} }
                                                        })}
                                                        renderMode={"p"} />,
                                                    <$ActionButton key="p.MyFirstModule.Home_Web.actionButton10"
                                                        $widgetId="p.MyFirstModule.Home_Web.actionButton10"
                                                        buttonId={"p.MyFirstModule.Home_Web.actionButton10"}
                                                        class={"mx-name-actionButton10"}
                                                        renderType={"link"}
                                                        role={"button"}
                                                        buttonClass={"btn-default"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Learn more" }, "args": {} }
                                                        })}
                                                        tooltip={TextProperty({
                                                            "value": ""
                                                        })}
                                                        icon={WebIconProperty({
                                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-arrow-narrow-right" }
                                                        })}
                                                        action={ActionProperty({
                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mendix.com/appstore/modules/gallery/" }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />
                                        ]} />
                                ]} />
                        ]} />
                ]} />,
            <$Div key="p.MyFirstModule.Home_Web.layoutGrid3$row3"
                $widgetId="p.MyFirstModule.Home_Web.layoutGrid3$row3"
                class={"row"}
                content={[
                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid3$row3$column0"
                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid3$row3$column0"
                        class={"col-lg col-md col"}
                        content={[
                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid2"
                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid2"
                                class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fixed spacing-outer-top-medium spacing-outer-bottom-medium"}
                                content={[
                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid2$row0"
                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid2$row0"
                                        class={"row align-children-center"}
                                        content={[
                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid2$row0$column0"
                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid2$row0$column0"
                                                class={"col-lg-auto col-md col"}
                                                content={[
                                                    <$Image key="p.MyFirstModule.Home_Web.image9"
                                                        $widgetId="p.MyFirstModule.Home_Web.image9"
                                                        datasource={"image"}
                                                        imageObject={WebStaticImageProperty({
                                                            "image": { "uri": "img/MyFirstModule$Images$_3.png" }
                                                        })}
                                                        imageUrl={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        isBackgroundImage={false}
                                                        onClickType={"action"}
                                                        alternativeText={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        widthUnit={"pixels"}
                                                        width={36}
                                                        heightUnit={"pixels"}
                                                        height={36}
                                                        iconSize={14}
                                                        displayAs={"fullImage"}
                                                        responsive={true}
                                                        minHeightUnit={"none"}
                                                        minHeight={0}
                                                        maxHeightUnit={"none"}
                                                        maxHeight={0}
                                                        class={"mx-name-image9"} />
                                                ]} />,
                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid2$row0$column1"
                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid2$row0$column1"
                                                class={"col-lg col-md col"}
                                                content={[
                                                    <$Text key="p.MyFirstModule.Home_Web.text24"
                                                        $widgetId="p.MyFirstModule.Home_Web.text24"
                                                        class={"mx-name-text24 spacing-outer-bottom-none"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Add logic with Microflows, Nanoflows, and Workflows" }, "args": {} }
                                                        })}
                                                        renderMode={"h2"} />
                                                ]} />
                                        ]} />,
                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid2$row1"
                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid2$row1"
                                        class={"row"}
                                        content={[
                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid2$row1$column0"
                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid2$row1$column0"
                                                class={"col-lg col-md col"}
                                                content={[
                                                    <$Text key="p.MyFirstModule.Home_Web.text4"
                                                        $widgetId="p.MyFirstModule.Home_Web.text4"
                                                        class={"mx-name-text4 text-detail"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Handle user interactions, automate processes, and build app logic without complex coding by using visual flows." }, "args": {} }
                                                        })}
                                                        renderMode={"span"} />
                                                ]} />
                                        ]} />,
                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid2$row2"
                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid2$row2"
                                        class={"row cards"}
                                        style={{
                                            "--layoutgrid-column-gap": "var(--spacing-large)"
                                        }}
                                        content={[
                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid2$row2$column0"
                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid2$row2$column0"
                                                class={"col-lg col-md col flex-column"}
                                                content={[
                                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid4"
                                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid4"
                                                        class={"mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid"}
                                                        content={[
                                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid4$row0"
                                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid4$row0"
                                                                class={"row align-children-center"}
                                                                content={[
                                                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid4$row0$column0"
                                                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid4$row0$column0"
                                                                        class={"col-lg-auto col-md col"}
                                                                        content={[
                                                                            <$Image key="p.MyFirstModule.Home_Web.image20"
                                                                                $widgetId="p.MyFirstModule.Home_Web.image20"
                                                                                datasource={"image"}
                                                                                imageObject={WebStaticImageProperty({
                                                                                    "image": { "uri": "img/MyFirstModule$Images$microflow.png" }
                                                                                })}
                                                                                imageUrl={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })}
                                                                                isBackgroundImage={false}
                                                                                onClickType={"action"}
                                                                                alternativeText={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })}
                                                                                widthUnit={"pixels"}
                                                                                width={48}
                                                                                heightUnit={"auto"}
                                                                                height={100}
                                                                                iconSize={14}
                                                                                displayAs={"fullImage"}
                                                                                responsive={true}
                                                                                minHeightUnit={"none"}
                                                                                minHeight={0}
                                                                                maxHeightUnit={"none"}
                                                                                maxHeight={0}
                                                                                class={"mx-name-image20"} />
                                                                        ]} />,
                                                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid4$row0$column1"
                                                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid4$row0$column1"
                                                                        class={"col-lg col-md col"}
                                                                        content={[
                                                                            <$Text key="p.MyFirstModule.Home_Web.text45"
                                                                                $widgetId="p.MyFirstModule.Home_Web.text45"
                                                                                class={"mx-name-text45 spacing-outer-bottom-none"}
                                                                                caption={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Microflows" }, "args": {} }
                                                                                })}
                                                                                renderMode={"h4"} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />,
                                                    <$Text key="p.MyFirstModule.Home_Web.text46"
                                                        $widgetId="p.MyFirstModule.Home_Web.text46"
                                                        class={"mx-name-text46 text-detail"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Server-side logic used for data processing, validations, integrations, or any action that requires access to the database" }, "args": {} }
                                                        })}
                                                        renderMode={"p"} />,
                                                    <$ActionButton key="p.MyFirstModule.Home_Web.actionButton13"
                                                        $widgetId="p.MyFirstModule.Home_Web.actionButton13"
                                                        buttonId={"p.MyFirstModule.Home_Web.actionButton13"}
                                                        class={"mx-name-actionButton13"}
                                                        renderType={"link"}
                                                        role={"button"}
                                                        buttonClass={"btn-default"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Learn more" }, "args": {} }
                                                        })}
                                                        tooltip={TextProperty({
                                                            "value": ""
                                                        })}
                                                        icon={WebIconProperty({
                                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-arrow-narrow-right" }
                                                        })}
                                                        action={ActionProperty({
                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mendix.com/refguide/microflows/" }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />,
                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid2$row2$column1"
                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid2$row2$column1"
                                                class={"col-lg col-md col flex-column"}
                                                content={[
                                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid6"
                                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid6"
                                                        class={"mx-name-layoutGrid6 mx-layoutgrid mx-layoutgrid-fluid"}
                                                        content={[
                                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid6$row0"
                                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid6$row0"
                                                                class={"row align-children-center"}
                                                                content={[
                                                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid6$row0$column0"
                                                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid6$row0$column0"
                                                                        class={"col-lg-auto col-md col"}
                                                                        content={[
                                                                            <$Image key="p.MyFirstModule.Home_Web.image11"
                                                                                $widgetId="p.MyFirstModule.Home_Web.image11"
                                                                                datasource={"image"}
                                                                                imageObject={WebStaticImageProperty({
                                                                                    "image": { "uri": "img/MyFirstModule$Images$nanoflow.png" }
                                                                                })}
                                                                                imageUrl={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })}
                                                                                isBackgroundImage={false}
                                                                                onClickType={"action"}
                                                                                alternativeText={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })}
                                                                                widthUnit={"pixels"}
                                                                                width={48}
                                                                                heightUnit={"auto"}
                                                                                height={100}
                                                                                iconSize={14}
                                                                                displayAs={"fullImage"}
                                                                                responsive={true}
                                                                                minHeightUnit={"none"}
                                                                                minHeight={0}
                                                                                maxHeightUnit={"none"}
                                                                                maxHeight={0}
                                                                                class={"mx-name-image11"} />
                                                                        ]} />,
                                                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid6$row0$column1"
                                                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid6$row0$column1"
                                                                        class={"col-lg col-md col"}
                                                                        content={[
                                                                            <$Text key="p.MyFirstModule.Home_Web.text47"
                                                                                $widgetId="p.MyFirstModule.Home_Web.text47"
                                                                                class={"mx-name-text47 spacing-outer-bottom-none"}
                                                                                caption={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Nanoflows" }, "args": {} }
                                                                                })}
                                                                                renderMode={"h4"} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />,
                                                    <$Text key="p.MyFirstModule.Home_Web.text28"
                                                        $widgetId="p.MyFirstModule.Home_Web.text28"
                                                        class={"mx-name-text28 text-detail"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Client-side logic for fast, lightweight actions like toggling visibility, showing messages, or offline behavior on mobile." }, "args": {} }
                                                        })}
                                                        renderMode={"p"} />,
                                                    <$ActionButton key="p.MyFirstModule.Home_Web.actionButton6"
                                                        $widgetId="p.MyFirstModule.Home_Web.actionButton6"
                                                        buttonId={"p.MyFirstModule.Home_Web.actionButton6"}
                                                        class={"mx-name-actionButton6"}
                                                        renderType={"link"}
                                                        role={"button"}
                                                        buttonClass={"btn-default"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Learn more" }, "args": {} }
                                                        })}
                                                        tooltip={TextProperty({
                                                            "value": ""
                                                        })}
                                                        icon={WebIconProperty({
                                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-arrow-narrow-right" }
                                                        })}
                                                        action={ActionProperty({
                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mendix.com/refguide/nanoflows/" }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />,
                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid2$row2$column2"
                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid2$row2$column2"
                                                class={"col-lg col-md col flex-column"}
                                                content={[
                                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid7"
                                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid7"
                                                        class={"mx-name-layoutGrid7 mx-layoutgrid mx-layoutgrid-fluid"}
                                                        content={[
                                                            <$Div key="p.MyFirstModule.Home_Web.layoutGrid7$row0"
                                                                $widgetId="p.MyFirstModule.Home_Web.layoutGrid7$row0"
                                                                class={"row align-children-center"}
                                                                content={[
                                                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid7$row0$column0"
                                                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid7$row0$column0"
                                                                        class={"col-lg-auto col-md col"}
                                                                        content={[
                                                                            <$Image key="p.MyFirstModule.Home_Web.image18"
                                                                                $widgetId="p.MyFirstModule.Home_Web.image18"
                                                                                datasource={"image"}
                                                                                imageObject={WebStaticImageProperty({
                                                                                    "image": { "uri": "img/MyFirstModule$Images$workflow.png" }
                                                                                })}
                                                                                imageUrl={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })}
                                                                                isBackgroundImage={false}
                                                                                onClickType={"action"}
                                                                                alternativeText={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })}
                                                                                widthUnit={"pixels"}
                                                                                width={48}
                                                                                heightUnit={"auto"}
                                                                                height={100}
                                                                                iconSize={14}
                                                                                displayAs={"fullImage"}
                                                                                responsive={true}
                                                                                minHeightUnit={"none"}
                                                                                minHeight={0}
                                                                                maxHeightUnit={"none"}
                                                                                maxHeight={0}
                                                                                class={"mx-name-image18"} />
                                                                        ]} />,
                                                                    <$Div key="p.MyFirstModule.Home_Web.layoutGrid7$row0$column1"
                                                                        $widgetId="p.MyFirstModule.Home_Web.layoutGrid7$row0$column1"
                                                                        class={"col-lg col-md col"}
                                                                        content={[
                                                                            <$Text key="p.MyFirstModule.Home_Web.text48"
                                                                                $widgetId="p.MyFirstModule.Home_Web.text48"
                                                                                class={"mx-name-text48 spacing-outer-bottom-none"}
                                                                                caption={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Workflows" }, "args": {} }
                                                                                })}
                                                                                renderMode={"h4"} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />,
                                                    <$Text key="p.MyFirstModule.Home_Web.text30"
                                                        $widgetId="p.MyFirstModule.Home_Web.text30"
                                                        class={"mx-name-text30 text-detail"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Ideal for modeling long-running, human-centric processes like approvals or reviews. Design multistep flows that include user tasks, decisions, and automated steps." }, "args": {} }
                                                        })}
                                                        renderMode={"p"} />,
                                                    <$ActionButton key="p.MyFirstModule.Home_Web.actionButton11"
                                                        $widgetId="p.MyFirstModule.Home_Web.actionButton11"
                                                        buttonId={"p.MyFirstModule.Home_Web.actionButton11"}
                                                        class={"mx-name-actionButton11"}
                                                        renderType={"link"}
                                                        role={"button"}
                                                        buttonClass={"btn-default"}
                                                        caption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Learn more" }, "args": {} }
                                                        })}
                                                        tooltip={TextProperty({
                                                            "value": ""
                                                        })}
                                                        icon={WebIconProperty({
                                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-arrow-narrow-right" }
                                                        })}
                                                        action={ActionProperty({
                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mendix.com/refguide/workflows/" }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />
                                        ]} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Homepage"
]);

export const classes = "layout-atlas layout-atlas-responsive-topbar";

export const autofocus = "desktopOnly";
export const style = {};
export const parameters = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_TopBar.Main": region$Main,
};
