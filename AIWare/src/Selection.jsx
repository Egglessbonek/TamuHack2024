import './Selection.css'

const categories = [
  'Accessories',
  'Detail',
  'Faces',
  'Fingers',
  'Hair',
  'Light',
  'Subject Matter',
  'Text',
  'Texture',
  'Watermark'
]

function Selection() {


  return (
    <>
      <table className="selection">
        <tbody>
          {
            categories.map((category, index) => {
              if (index % 2 === 0) {
                return (
                  <tr>
                    <td>
                      <button className="selection-button">{category}</button>
                    </td>
                    <td>
                      <button className="selection-button">{categories[index + 1]}</button>
                    </td>
                  </tr>
                )
              }
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Selection;