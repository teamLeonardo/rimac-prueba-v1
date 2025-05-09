import React, { lazy, Suspense } from "react"
import LoaderListPlans from "@/shared/components/modules/LoaderListPlans"

const PlansList = lazy(() => import('@/shared/components/modules/ListPlans'))
const PlansDetail = () => {
    return (
        <div className="mx-auto w-11/12 md:w-8/12 ">
            <Suspense fallback={<LoaderListPlans />}>
                <PlansList />
            </Suspense>
        </div>
    )
}

export default PlansDetail