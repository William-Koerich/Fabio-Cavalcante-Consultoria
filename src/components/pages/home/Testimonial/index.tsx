import * as S from "./style"

export function Testimonial () {
    return (
        <>
            <S.TestimonialContainer>
                <S.TestimonialImage src="/images/testemonial1.png" alt="Testimonial" />
                <S.TestimonialInfo>
                    <S.TestimonialRole>Manager</S.TestimonialRole>
                    <S.TestimonialName>Lawrence Brown</S.TestimonialName>
                </S.TestimonialInfo>
            </S.TestimonialContainer>
        </>
    )
}