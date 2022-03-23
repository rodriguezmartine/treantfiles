+++
title = "Say hello to Doks"
description = "Introducing Doks, a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
lead = "Introducing Doks, a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date = 2020-11-04T09:19:42+01:00
lastmod = 2020-11-04T09:19:42+01:00
draft = false
weight = 1
contributors = ["Treant admin"]

[dataset] # this key will in the chart shortcode
  fileLink = "content/themes.csv" # path to where csv is stored
  colors = ["#627c62", "#11819b", "#ef7f1a", "#4e1154"]
  columnTitles = ["Theme", "Latest Version", "Owner"]
  charts = ["bar", "doughnut", "pie", "table"]
  baseChartOn = 3 # number of column the chart(s) and graph should be drawn from
  piechart = true
  doughnutchart = true
  bargraph = true
  title = "Projects"
  table = true # show table listing the chart data
+++

# Hello grid!!

{{< grid "3 mt-2 mb-2" >}}
  {{< chart "dataset" "pie,doughnut,bar" >}}
{{< /grid >}}

#### __Show Table at once__

{{< block >}}
  {{< chart "dataset" "table" >}}
{{< /block >}}


