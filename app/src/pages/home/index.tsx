import * as React from "react"

import MainLayout from "~/layouts/main-layout"

import Welcome from "~/components/common/sections/welcome"

const Home: React.FC = () => {
  return (
    <MainLayout beforeContent={<Welcome />}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam amet dignissimos distinctio, eaque
      iste labore laudantium nulla odit provident qui, quidem quisquam repudiandae soluta, tempore vero? Cumque
      dignissimos dolore facilis laborum, libero magnam magni mollitia similique tenetur voluptates? Asperiores
      inventore perspiciatis quisquam repellat vel. A, assumenda atque commodi cumque cupiditate ea eos eum facere fuga
      laboriosam libero odio pariatur provident quaerat quam soluta sunt suscipit totam veniam voluptas. Aliquam cumque
      delectus deleniti deserunt eaque est eveniet explicabo facere hic inventore ipsum iste iusto laudantium libero
      neque nihil pariatur placeat praesentium quod quos rem, repellendus rerum sit velit vitae?
    </MainLayout>
  )
}

export default Home
