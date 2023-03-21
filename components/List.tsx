import React from 'react'

type Props = {
    title: string;
    subTitle1?: string;
    subTitle2?: string;
    subTitle3?: string;
    subTitle4?: string;
    subTitle5?: string;
}

const List = (props: Props) => {
    return (
        <div>
            <h6 className='font-medium text-gray-400'>{props.title}</h6>
            <ul>
                <li className='py-2 text-sm'>{props.subTitle1}</li>
                <li className='py-2 text-sm'>{props.subTitle2}</li>
                <li className='py-2 text-sm'>{props.subTitle3}</li>
                <li className='py-2 text-sm'>{props.subTitle4}</li>
                <li className='py-2 text-sm'>{props.subTitle5}</li>
            </ul>
        </div>
    )
}

export default List