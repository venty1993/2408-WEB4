function getTargetScrollProgress(htmlObject, startTargetApprochInView) {
    const targetPos = htmlObject.getBoundingClientRect()
    const distance = startTargetApprochInView ? (targetPos.top- window.innerHeight)*-1 : targetPos.top*-1
    const maxDistance = startTargetApprochInView ? targetPos.height + window.innerHeight : targetPos.height - window.innerHeight;
     
    return clamp(distance/maxDistance,0,1)

    function clamp(value,min,max){
        return Math.max(Math.min(value,max),min)
    }
}