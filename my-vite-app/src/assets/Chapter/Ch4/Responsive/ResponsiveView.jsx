import React, { useContext } from "react";
import { ScreenContext, ScreenContextProvider } from "./S_ContextProvider";

export function ResponsiveView() {
  const { screenSize } = useContext(ScreenContext);

  return (
    <>
      {screenSize.width > 600 && (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
          doloribus, iste pariatur, iusto nobis incidunt voluptate animi
          exercitationem explicabo ullam recusandae obcaecati, ut voluptas
          necessitatibus eaque perferendis tempora molestias. Eligendi id
          molestias, adipisci, autem non consequuntur magni aut optio rerum quas
          dicta dolores dolorum voluptas cupiditate incidunt assumenda eveniet.
          Expedita ratione dolore vel tempore maxime corporis est eligendi
          alias, unde quidem rem quas, sed ut aspernatur saepe quos reiciendis
          aperiam cupiditate. Accusantium at odio non praesentium! Facilis,
          ipsam? Quibusdam, minus adipisci. Culpa rem consequatur eum magnam.
          Alias tempora quaerat architecto impedit sunt laboriosam doloribus
          soluta saepe, inventore id consequuntur ipsum!
        </p>
      )}
    </>
  );
}
