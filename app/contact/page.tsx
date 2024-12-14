import React from 'react'

const Contact = () => {
  return (
    <div>
      <br />
      <p>휴대전화 : 010-0000-0000</p>
      <br />
      <p>이메일 : email0000@email.com</p>
      <br />
      <p>카카오톡 ID : abcd0000</p>
      <br />
      <p>인스타그램 : @instagram0000</p>
      <br />
      <ul className="mt-4">
        <li className="mb-4">
          <p className="mt-2">
            <a
              href="https://github.com/scrjy?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              팀 프로젝트
            </a>
          </p>
        </li>
        <li className="mb-4">
          <p className="mt-2">
            <a
              href="https://portfolio-beryl-six-36.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              중간고사 포트폴리오
            </a>
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Contact
