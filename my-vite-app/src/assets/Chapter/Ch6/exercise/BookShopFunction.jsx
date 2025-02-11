import React, { useState } from "react";

export function Bookshop() {
  const [article, setArticle] = useState([]);

  state = {
    article: [
      {
        id: 0,
        titile: "Article1",
        summary: "Article1 summary",
        display: none,
      },
      {
        id: 0,
        titile: "Article1",
        summary: "Article1 summary",
        display: none,
      },
      {
        id: 0,
        titile: "Article1",
        summary: "Article1 summary",
        display: none,
      },
    ],
    titile: "",
    summary: "",
  };

  function onChangeTitle(e) {
    setArticle(e.target.value);
  }

  function onChangeSummary(e) {
    setArticle(e.target.value);
  }

  onClickAdd = () => {
    this.setState((state) => ({
      article: [
        ...this.state.article,
        {
          id: id.next(),
          title: this.state.title,
          summary: this.state.summary,
          display: "none",
        },
      ],
      title: "",
      summary: "",
    }));
  };
}
